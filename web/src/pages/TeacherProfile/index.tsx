import React, { useState, useEffect, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'

import Input from '../../components/Input'
import WarningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import BackgroundImage from '../../assets/images/success-background.svg'
import { apiGet, apiPut } from '../../services/api'

interface Teacher{
    id: number
    name: string
    avatar: string
    whatsapp: string
    bio: string
    subject: string
    cost: string
}

function Profile(){

    const [teacher, setTeacher] = useState<Teacher>({} as Teacher)

    const [scheduleItems,setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''}
    ])

    useEffect(()=>{
        async function getProfile(){
            try {
                const response = await apiGet('classes-profile')
                setTeacher(response.data[0])
                setScheduleItems(response.data[0].schedule)
            } catch (error) {
                console.log(error)
                alert('não foi possível encontrar o perfil tente novamente')
            }
        }
        getProfile()
    },[])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''}
        ])
    }

    function removeScheduleItem(scheduleItem: any, index:number){
        const filteredScheduleItems = scheduleItems.filter(sc=>sc !== scheduleItem)
        setScheduleItems(filteredScheduleItems)
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem,index)=>{
            if(index === position){
                return{ ...scheduleItem, [field]: value}
            }
            return scheduleItem
        })
        setScheduleItems(newArray)
    }

    async function handleUpdate(event: FormEvent) {
        event.preventDefault()
        console.log(scheduleItems)
        const data = {
            ...teacher,
            schedule: scheduleItems
        }
        console.log(data)
        try {
            const response = await apiPut('classes-profile',data)
            if(response.status === 204){
                alert('Atualizado com sucesso')
            }
        } catch (error) {
            console.log(error)
            alert('Não foi possível cadastrar')
        }
    }

    return(
        <div id="page-teacher-profile" className="container">
            <PageHeader 
                title={teacher.name}
                screenName="Meu perfil"
                photo={teacher.avatar}
                description={teacher.subject}
                backgroundImage={BackgroundImage}
            />

            <main>
                <form onSubmit={handleUpdate}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input label="Nome Completo" name="name" value={teacher.name} onChange={e=>{setTeacher({...teacher, name:e.target.value})}}/>
                        <Input label="WhatsApp" name="whatsapp" value={teacher.whatsapp} onChange={e=>{setTeacher({...teacher, whatsapp:e.target.value})}}/>
                        <Textarea name="bio" label="Biografia" value={teacher.bio} onChange={e=>{setTeacher({...teacher, bio:e.target.value})}}/>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            label="Matéria"
                            name="subject"
                            value={teacher.subject}
                            onChange={e=>{setTeacher({...teacher, subject:e.target.value})}}
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
                        <Input 
                            label="Custo da sua hora por aula" 
                            name="cost" 
                            value={teacher.cost}
                            onChange={e=>{setTeacher({...teacher, cost:e.target.value})}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem,index)=>{
                            return(
                                <>
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select 
                                            name="week_day"
                                            label="Dia da semana"
                                            value={scheduleItem.week_day}
                                            onChange={e => setScheduleItemValue(index,'week_day',e.target.value)}
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
                                            name="from"
                                            label="Das"
                                            type="time"
                                            value={scheduleItem.from}
                                            onChange={e => setScheduleItemValue(index,'from',e.target.value)}/>
                                        <Input 
                                            name="to"
                                            label="Até" 
                                            type="time"
                                            value={scheduleItem.to} 
                                            onChange={e => setScheduleItemValue(index,'to',e.target.value)}/>
                                    </div>
                                    <div className="remove-schedule">
                                        <hr/>
                                        <button type="button" onClick={e=>{removeScheduleItem(scheduleItem,index)}}>Excluir horário</button>
                                        <hr/>
                                    </div>
                                </>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Aviso importante"/>
                            Importante<br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">Atualizar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default Profile