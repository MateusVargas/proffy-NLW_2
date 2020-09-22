import React, { useState, useEffect } from 'react'
import { View, Image, Text, ImageBackground, TextInput, CheckBox, Alert, ActivityIndicator, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import logo from '../../assets/images/others/intro.png'

import { useAuth } from '../../contexts/auth'

import AsyncStorage from '@react-native-community/async-storage'

function SignIn() {
    const {navigate} = useNavigation()

    const [loading, setLoading] = useState(false)
    
    const [formData, setFormData] = useState({
       email: '',
       password: ''
    })
    const [isRemember, setIsRemember] = useState(false)

    const { signed, signIn } = useAuth()

    useEffect(()=>{
        async function getRememberData(){
            setLoading(true)
            const email = await AsyncStorage.getItem('email')
            const password = await AsyncStorage.getItem('password')

            if(email && password){
                setFormData({
                    email: JSON.parse(email),
                    password: JSON.parse(password)
                }) 
                setIsRemember(!isRemember)
            }
            setLoading(false)
        }
        getRememberData()
    },[])

    function goToSignUpPages() {
        navigate('SignUpStep1')
    }

    async function handleSignIn(){
        if(formData.email.trim().length === 0){
            Alert.alert('E-mail é obrigatório')
            return
        }
        else if(formData.password.trim().length === 0){
            Alert.alert('Informe a senha')
        }
        else{
            const data = {
                email: formData.email,
                password: formData.password
            }
            await signIn(data, isRemember)
        }
    }

    function goToRecoveryPassword(){
        navigate('RecoveryPassword')
    }


    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#8257E5"/>
            </View>
        )
    }


    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <Image source={logo}/>
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
                            secureTextEntry={true}
                        />
                </View>

                <View style={styles.options}>
                    <View style={styles.viewCheckbox}>
                        <CheckBox
                            value={isRemember}
                            onValueChange={value=>{setIsRemember(!isRemember)}}
                        />
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