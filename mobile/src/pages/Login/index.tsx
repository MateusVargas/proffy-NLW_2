import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'

function Login() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function goToSignUpPages() {
        navigate('SignUpStep1')
    }

    function goToHomePage(){
        navigate('Landing')
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
                            placeholder="E-mail"
                        />
                    <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Senha"
                        />
                </View>

                <View style={styles.options}>
                    <View style={styles.viewCheckbox}>
                        <CheckBox/>
                        <Text style={styles.textOptions}>Lembrar-me</Text>
                    </View>
                    <Text style={styles.textOptions}>
                        Esqueci minha senha
                    </Text>
                </View>

                <View style={styles.buttonView}>
                	<RectButton onPress={goToHomePage} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default Login