import React, { useState, FormEvent, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import Loading from '../../components/Loading'

import './styles.css'

import Input from '../../components/Input'

import WarningIcon from '../../assets/images/icons/warning.svg'
import RocketIcon from '../../assets/images/icons/rocket.svg'

import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import {apiPost,apiGet} from '../../services/api'
import { useHistory, Redirect } from 'react-router-dom'

function TeacherForm(){

    const history = useHistory()

    const [loading, setLoading] = useState(true)
    const [isRedirect,setIsRedirect] = useState(false)

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems,setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''}
    ])

    useEffect(()=>{
        async function getTeacher(){
            try {
                const resp:any = await apiGet('classes-profile')
                if(resp.data.length !== 0){
                    setIsRedirect(true)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getTeacher()
    },[])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''}
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem,index)=>{
            if(index === position){
                return{ ...scheduleItem, [field]: value}
            }
            return scheduleItem
        })
        console.log(newArray)
        setScheduleItems(newArray)
    }

    function createClass(event: FormEvent){
        event.preventDefault()
        setLoading(true)
        apiPost('classes',{
            name,
            avatar,
            subject,
            whatsapp,
            bio,
            cost: Number(cost),
            schedule: scheduleItems
        }).then((resp)=>{
            if(resp.status === 201){
                setLoading(false)
                alert('cadastro realizado com sucesso')
                history.push('/home')
            }
        }).catch(()=>{
            setLoading(false)
            alert('não foi possível cadastrar')
        })
    }

    if(loading){
        return <Loading/>
    }

    if(isRedirect){
        return <Redirect to='/give-classes/profile'/>
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                screenName="Dar aulas"
                description="O primeiro pass é preencher esse formulário de incrição"
                icon={RocketIcon}
                info="Prepare-se! vai ser o máximo."
            />

            <main>
                <form onSubmit={createClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input label="Nome Completo" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <Input label="Avatar" name="avatar" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
                        <Input label="WhatsApp" name="whatsapp" value={whatsapp} onChange={(e)=>{setWhatsApp(e.target.value)}}/>
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            label="Matéria"
                            name="subject"
                            value={subject}
                            onChange={(e)=>{setSubject(e.target.value)}}
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
                            value={cost} 
                            onChange={(e)=>{setCost(e.target.value)}}
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
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Aviso importante"/>
                            Importante<br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default TeacherForm