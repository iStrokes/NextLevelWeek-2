import React from 'react'
import TeacherItem from '../../components/TeacherItem/Index'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import './styles.css'



function teacherList() {
    return (
        <div id="page-teacher-list" className="container">
        <PageHeader title="Esses são os proffys disponiveis">
            <form id="search-teachers">

               <Input name="subject" label="Matéria"/>

               <Input name="week_day" label="Dias da semana"/>

               <Input name="time" type="time" label="Hora"/>
                
            </form>
        </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}


export default teacherList;