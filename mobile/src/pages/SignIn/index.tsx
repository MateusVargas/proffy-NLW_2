import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'

import { useAuth } from '../../contexts/auth'


function SignIn() {
    const {navigate} = useNavigation()
    
    const [formData, setFormData] = useState({
       email: '',
       password: ''
    })

    const { signed, signIn } = useAuth()


    useEffect(()=>{
        
    },[])

    function goToSignUpPages() {
        navigate('SignUpStep1')
    }

    async function handleSignIn(){
        const data = {
            email: formData.email,
            password: formData.password
        }
        await signIn(data)
    }

    function goToRecoveryPassword(){
        navigate('RecoveryPassword')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <Text style={styles.textTop}>Sua plataforma de estudos online.</Text>
            	</ImageBackground>
            </View>


            <View style={styles.bottom}>
                <View style={styles.header}>
            	    <Text style={styles.textLogin}>Fazer login</Text>
            	    <Text 
                        onPress={goToSignUpPages}
                        style={styles.textAccount}>
                        Criar uma conta
                    </Text>
                </View>

                <View style={styles.fields}>
                    <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            value={formData.email}
                            onChangeText={value=>setFormData({...formData, email: value})}
                            placeholder="E-mail"
                        />
                    <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            value={formData.password}
                            onChangeText={value=>setFormData({...formData, password: value})}
                            placeholder="Senha"
                        />
                </View>

                <View style={styles.options}>
                    <View style={styles.viewCheckbox}>
                        <CheckBox/>
                        <Text style={styles.textOptions}>Lembrar-me</Text>
                    </View>
                    <Text onPress={goToRecoveryPassword} style={styles.textOptions}>
                        Esqueci minha senha
                    </Text>
                </View>

                <View style={styles.buttonView}>
                	<RectButton onPress={handleSignIn} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default SignIn