import express from 'express'
import db from './database/connection';
import convertHourToMinute from './utils/convertHourToMinute';
const routes = express.Router()

interface scheduleItemTypes {
  week_day: number;
  from: string;
  to: string;
};

routes.post('/classes', async (req, res) => {
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

});

export default routes;