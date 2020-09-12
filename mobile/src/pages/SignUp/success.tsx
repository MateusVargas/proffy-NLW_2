import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, ImageBackground, Text, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'

import bgImage from '../../assets/images/give-classes-background.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        flex: 4
    },
    textBig: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 35,
        color: '#fff',
        maxWidth: 250,
        marginBottom: 10,
        textAlign: 'center'
    },
    textSmall: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
        color: '#fff',
        maxWidth: 250,
        textAlign: 'center'
    },

    bottom: {
        flex: 1
    },
    buttonView: {
        alignItems: 'center',
        marginBottom: 10
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


function SuccessSignUp() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function handleGoBack() {
        navigate('SignUpStep1')
    }

    function goToLoginPage() {
        navigate('SignIn')
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.info}>
                <ImageBackground resizeMode="contain" source={bgImage} style={styles.container}>
                    <Text style={styles.textBig}>Cadastro concluído!</Text>
                    <Text style={styles.textSmall}>Agora você faz parte da plataforma da Proffy</Text>
                </ImageBackground>
            </View>

            <View style={styles.bottom}>
                <View style={styles.buttonView}>
                    <RectButton onPress={goToLoginPage} style={styles.button}>
                        <Text style={styles.buttonText}>Fazer login</Text>
                    </RectButton>
                </View>
            </View>
 
        </View>
    )
}
export default SuccessSignUp