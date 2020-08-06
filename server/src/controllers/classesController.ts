import {Request, Response} from  'express'

import db from '../database/connection';
import convertHourToMinute from '../utils/convertHourToMinute';

interface scheduleItemTypes {
  week_day: number;
  from: string;
  to: string;
};

export default class ClassesController {

  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinute(time);
    
    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'user_id')
      .select('classes.*', 'users.*')

    return res.json(classes);

  }

  async CreateClass(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = req.body;
  
    const transactionDb = await db.transaction();
  
    try {
      const insertedUsersId = await transactionDb('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersId[0];
    
      const insertedClassesId = await transactionDb('classes').insert({
        subject,
        cost,
        user_id,
      });
    
      const class_id = insertedClassesId[0];
    
      const classSchedule = schedule.map((scheduleItem:scheduleItemTypes) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinute(scheduleItem.from),
          to: convertHourToMinute(scheduleItem.to),
        };
      });
    
      await transactionDb('class_schedule').insert(classSchedule);
    
      await transactionDb.commit();
      return res.status(201).send();
  
    } catch (err) {
      await transactionDb.rollback();
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  
  }
}