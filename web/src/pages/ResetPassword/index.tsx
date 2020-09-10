import React, { useState, FormEvent, ChangeEvent } from 'react'

import './styles.css'

import Input from '../../components/Input'
import Logo from '../../assets/images/logo.svg'
import { apiPost } from '../../services/api'
import { useLocation } from 'react-router-dom'

function ResetPassword(){

    const url = useLocation()

    const [formData,setFormData] = useState({
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleResetPassword(event: FormEvent) {
        event.preventDefault()
        try {
            const token = url.search.slice(7)
            const data = {
                email: formData.email,
                password: formData.password,
                passwordConfirmation: formData.passwordConfirmation,
                token
            }
            const response = await apiPost('reset-password',data)
            if(response.status === 204){
                alert('Senha redefinida, volte ao login')
            }
        } catch (error) {
            console.log(error)
            alert('Não foi possível redefinir a senha')
        }
    }

    return(
        <div id="page-reset">
            <div id="page-reset-content" className="container">

                <div className="logo-reset">
                    <img src={Logo} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <div className="reset">
                    <form onSubmit={handleResetPassword}>
                        <h2>Redefinição de senha</h2>

                        <Input label="" name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange}/>
                        <Input label="" name="password" type="password" placeholder="Senha" value={formData.password} onChange={handleInputChange}/>
                        <Input label="" name="passwordConfirmation" type="password" placeholder="Confirme a senha" value={formData.passwordConfirmation} onChange={handleInputChange}/>

                        <button type="submit">Redefinir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ResetPassword