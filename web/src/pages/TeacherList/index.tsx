import React, { useState, FormEvent, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'

import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import SmileIcon from '../../assets/images/icons/smile.svg'

import {apiGet} from '../../services/api'
import Loading from '../../components/Loading'

function TeacherList(){

    const [loading, setLoading] = useState(true)

    const [subject,setSubject] = useState('')
    const [week_day,setWeek_day] = useState('')
    const [time,setTime] = useState('')

    const [teachers,setTeachers] = useState([])
    const [totalTeachers, setTotalTeachers] = useState(0)

    async function searchTeachers(event: FormEvent) {
        event.preventDefault()
        setLoading(true)
        try{
            const response = await apiGet('classes',{
                params: {
                    subject,
                    week_day,
                    time
                }
            })
            setTeachers(response.data)
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        async function getProffys(){
            try{
                const response = await apiGet('classes-total')
                setTotalTeachers(response.data.total)
            }catch(err){
                console.log(err)
            }
            setLoading(false)
        }
        getProffys()
    },[])

    if(loading){
        return <Loading/>
    }
    
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader
             title="Estes são os proffys disponíveis."
             icon={SmileIcon}
             info={`Nós temos ${totalTeachers} professores.`}
             screenName="Estudar">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={e=>{setSubject(e.target.value)}}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação física', label: 'Educação física'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Filosofia', label: 'Filosofia'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Literatura', label: 'Literatura'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Redação', label: 'Redação'},
                            {value: 'Sociologia', label: 'Sociologia'}
                        ]}
                    />
                    <Select 
                        label="Dia da semana"
                        name="week_day"
                        value={week_day}
                        onChange={e=>{setWeek_day(e.target.value)}}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'}
                        ]}
                    />
                    <Input 
                        type="time"
                        name="time" 
                        label="hora"
                        value={time}
                        onChange={e=>{setTime(e.target.value)}}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher)=>{
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}
export default TeacherList