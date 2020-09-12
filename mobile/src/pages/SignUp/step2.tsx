import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

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
    

    useEffect(()=>{
        
    },[])

    function handleGoBack() {
        navigate('SignUpStep1')
    }

    function goToSuccessPage() {
        navigate('Success',{
            title: 'Cadastro concluído',
            description: 'Agora você faz parte da plataforma da Proffy',
            buttonText: 'Fazer login'
        })
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
                        placeholder="E-mail"
                    />
                    <TextInput 
                        placeholderTextColor="#c1bccc"
                        style={styles.input}
                        placeholder="Senha"
                    />
                </View>

                <View style={styles.buttonView}>
                	<RectButton onPress={goToSuccessPage} style={styles.button}>
                        <Text style={styles.buttonText}>Concluir cadastro</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default SignUpStep2