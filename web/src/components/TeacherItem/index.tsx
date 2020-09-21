import React, { FormEvent } from 'react'
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

import {apiPost} from '../../services/api'

export interface Teacher{
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection() {
        apiPost('connections',{
            proffy_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>
            
            <footer>
                <p>
                    Preço/hora
                    <strong>{teacher.cost}</strong>
                </p>
                <a 
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                >
                    <img src={WhatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}
export default TeacherItem