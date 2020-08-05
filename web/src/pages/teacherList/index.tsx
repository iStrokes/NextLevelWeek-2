import React from 'react'

import PageHeader from '../../components/PageHeader'


import './styles.css'
import TeacherItem from '../../components/TeacherItem/Index'


function teacherList() {
    return (
        <div id="page-teacher-list" className="container">
        <PageHeader title="Esses são os proffys disponiveis">
            <form id="search-teachers">
                <div className="input-blocks">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject"/>
                </div>

                <div className="input-blocks">
                    <label htmlFor="Week_day">Dia da semana</label>
                    <input type="text" id="Week_day"/>
                </div>

                <div className="input-blocks">
                    <label htmlFor="stime">Horario</label>
                    <input type="text" id="stime"/>
                </div>
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