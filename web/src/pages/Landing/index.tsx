import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import StudyImg from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import LogoutIcon from '../../assets/images/icons/shutdown.png'

import './styles.css'

import {apiGet} from '../../services/api'

import { AuthContext } from '../../context/auth'

interface AccountData{
    name: string
}

function Landing(){

    const {signOut, account} = useContext(AuthContext)

    const [totalConnections,setTotalConnections] = useState(0)

    const getname = localStorage.getItem('username')
    const user = getname !== null ? JSON.parse(getname) : null

    useEffect(()=>{
        async function getConnections(){
            try{
                const resp = await apiGet('connections')
                setTotalConnections(resp.data.total)
            }catch(err){
                console.log(err)
            }
        }
       getConnections()
    },[])

    function handleLogout() {
        signOut()
    }
//console.log(accounts)

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">

            <header className="top-bar">
                <div className="user">
                  <p>{user}</p>
                </div>

                <button className="btn-logout" onClick={handleLogout}>
                    <img src={LogoutIcon} alt="Sair"/>
                </button>
            </header>


                <div className="logo-container">
                    <img src={LogoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>
                
                <div className="buttons-container">
                    <Link to='/study' className="study">
                        <img src={StudyImg} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to='/give-classes' className="give-classes">
                        <img src={GiveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas 
                    <img src={PurpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}
export default Landing