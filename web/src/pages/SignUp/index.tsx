import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link, Redirect } from 'react-router-dom'

import './styles.css'

import Input from '../../components/Input'
import Logo from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'
import EyeIcon from '../../assets/images/icons/eye.svg'

import { apiPost } from '../../services/api'
import Loading from '../../components/Loading'

function SignUp(){

    const [loading,setLoading] = useState(false)
    const [isPasswordVisible,setIsPasswordVisible] = useState(true)
    const [isRedirect,setIsRedirect] = useState(false)
    
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    
    async function handleSignUp(event: FormEvent) {
        event.preventDefault()
        setLoading(true)
        try {
            const response = await apiPost('sign-up',formData)
            if(response.status === 201){
                setLoading(false)
                setIsRedirect(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            alert('Não foi possível cadastrar')
        }
    }

    if(loading){
        return <Loading/>
    }

    if(isRedirect){
        return <Redirect to='/signup-success'/>
    }

    return(
        <div id="page-signup">
            <div id="page-signup-content" className="container">

                <div className="back">
                    <Link to='/sign-in'><img src={BackIcon} alt="voltar"/></Link>
                </div>

                <div className="logo-signup">
                    <img src={Logo} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <div className="signup">
                    <form onSubmit={handleSignUp}>
                        <h2>Cadastro</h2>
                        <p>Preencha os campos abaixo para começar</p>

                        <Input label="" name="name" type="text" placeholder="Nome" value={formData.name} onChange={handleInputChange}/>
                        <Input label="" name="surname" type="text" placeholder="Sobrenome" value={formData.surname} onChange={handleInputChange}/>
                        <Input label="" name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange}/>

                        <div className="imgpsw">
                            <Input label="" name="password" type={isPasswordVisible ? 'password' : 'text'} placeholder="Senha" value={formData.password} onChange={handleInputChange}/>
                            <img className="show" src={EyeIcon} alt="Coração roxo" onClick={(e)=>{setIsPasswordVisible(!isPasswordVisible)}}/>
                        </div>        

                        <button type="submit">Concluir cadastro</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp