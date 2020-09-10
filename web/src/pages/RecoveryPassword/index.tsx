import React, { useState, FormEvent } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './styles.css'

import Input from '../../components/Input'
import Logo from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'
import { apiPost } from '../../services/api'
import Loading from '../../components/Loading'

function RecoveryPassword(){

    const [loading,setLoading] = useState(false)
    const [isRedirect,setIsRedirect] = useState(false)
    const [email,setEmail] = useState('')
    
    if(isRedirect){
        return <Redirect to='/recovery-success'/>
    }
    
    if(loading){
        return <Loading/>
    }

    async function handleForgotPassword(event: FormEvent) {
        event.preventDefault()
        setLoading(true)
        const data = { email }
        try {
            const response = await apiPost('forgot-password',data)
            if(response.status === 200){
                setIsRedirect(true)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return(
        <div id="page-recovery">
            <div id="page-recovery-content" className="container">

                <div className="back">
                    <Link to='/sign-in'><img src={BackIcon} alt="voltar"/></Link>
                </div>

                <div className="logo-recovery">
                    <img src={Logo} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <div className="recovery">
                    <form onSubmit={handleForgotPassword}>
                        <h2>Eita, esqueceu sua senha?</h2>
                        <p>Não esquenta, vamos dar um geito nisso</p>

                        <Input label="" name="email" type="email" placeholder="E-mail" value={email} onChange={e=>{setEmail(e.target.value)}}/>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RecoveryPassword