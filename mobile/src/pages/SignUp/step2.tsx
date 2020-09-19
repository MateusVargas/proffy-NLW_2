import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, CheckBox, Alert, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

import {useRoute} from '@react-navigation/native'
import api from '../../services/api'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
    },
    backButton: {
        paddingTop: 30,
        paddingLeft: 20,
        backgroundColor: '#eee',
        alignItems: 'flex-start'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        padding: 32,
    },


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInfo: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 22,
        color: '#202024'
    },



    fields: {
        flexDirection: 'column',
        marginTop: 15
    },
    input:{
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 20
    },


    buttonView: {
        alignItems: 'center',
        marginTop: 5
    },
    button: {
        height: 55,
        width: '100%',
        backgroundColor: '#04d361',
        borderRadius: 8,
        padding: 24,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 19
    }
})


function SignUpStep2() {
    const {navigate} = useNavigation()

    const routeParams:any = useRoute()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleGoBack() {
        navigate('SignUpStep1')
    }

    async function handleSignUp() {
        if(formData.email.trim().length === 0){
            Alert.alert('E-mail é obrigatório')
            return
        }
        else if(formData.password.trim().length < 4){
            Alert.alert('Senha é obrigatória')
        }
        else{
            const data = {
                name: routeParams.params.name,
                surname: routeParams.params.surname,
                email: formData.email,
                password: formData.password
            }
            const response = await api.post('/sign-up',data)
          
            if(response.status === 201){
                navigate('Success',{
                    title: 'Cadastro concluído',
                    description: 'Agora você faz parte da plataforma da Proffy',
                    buttonText: 'Fazer login',
                    to: 'SignIn'
                })
            }
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} style={{tintColor: '#202024'}} resizeMode="contain"/>
                </BorderlessButton>
            </View>

            <View style={styles.form}>
                <View style={styles.header}>
            	    <Text style={styles.textInfo}>02. Email e Senha</Text>
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

                <View style={styles.buttonView}>
                	<RectButton onPress={handleSignUp} style={styles.button}>
                        <Text style={styles.buttonText}>Concluir cadastro</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default SignUpStep2