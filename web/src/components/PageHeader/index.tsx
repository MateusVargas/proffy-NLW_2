import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../../assets/images/icons/back.svg'
import LogoIcon from '../../assets/images/logo.svg'
import './styles.css'

interface Props{
    title: string
    screenName: string
    photo?: string
    description?: string
    info?: string
    icon?: string
    backgroundImage?: ReactNode
}

const PageHeader: React.FC<Props> = (props) => {
    return(
        <header className="page-header" 
            style={{
                backgroundImage: props.backgroundImage
                    ? `url(${props.backgroundImage})`
                    : 'none',
                backgroundSize: props.backgroundImage
                ? 'contain'
                : 'none'
            }}>
            <div className="top-bar-container">
                <Link to='/home'>
                    <img src={BackIcon} alt="Voltar"/>
                </Link>
                <p>{props.screenName}</p>
                <img src={LogoIcon} alt="Proffy"/>
            </div>

            <div className="header-content" style={{
                    justifyContent: props.icon ? 'space-between' : 'center',
                    flexDirection: props.icon ? 'row' : 'column',
                    alignItems: props.icon ? 'center' : 'flex-start'
                }}>

                {props.photo && <img src={props.photo} alt="avatar"/>}
                <div style={{maxWidth: '40rem'}}>
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                </div>
                <div className="details">
                    {props.icon && <><img src={props.icon} alt="Smile"/><p>{props.info}</p></>}
                </div>
                {props.children}
            </div>
        </header>
    )
}
export default PageHeader