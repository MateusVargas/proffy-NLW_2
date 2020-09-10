import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import SuccessIcon from '../../assets/images/icons/success-check-icon.svg'

interface Props{
    title: string
    description: string
    textButton: string
    to: string
}

const Successfully: React.FC<Props> = ({title, description, textButton, to}) => {
    return(
        <div id="page-successfully">
            <div id="page-succesfully-content" className="container">
                <div className="info">
                    <img src={SuccessIcon} alt="concluído"/>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link to={to}>{textButton}</Link>
                </div>
            </div>
        </div>
    )
}
export default Successfully