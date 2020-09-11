import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    backButton: {
        paddingTop: 30,
        paddingLeft: 20,
        backgroundColor: '#eee',
        alignItems: 'flex-start'
    },
    titleTop: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 25,
        color: '#202024',
        maxWidth: 250
    },
    textTop: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
        color: '#202024',
        maxWidth: 230
    },


    bottom: {
        flex: 1,
        backgroundColor: '#eee',
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


function SignUpStep1() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function handleGoBack() {
        navigate('Login')
    }

    function goToStep2Page() {
        navigate('SignUpStep2')
    }

    return(
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} style={{tintColor: '#202024'}} resizeMode="contain"/>
                </BorderlessButton>
            </View>
            <View style={styles.top}>
                <Text style={styles.titleTop}>Crie sua conta gratuíta</Text>
                <Text style={styles.textTop}>Basta preencher esses dados e você estará conosco.</Text>
            </View>


            <View style={styles.bottom}>
                <View style={styles.header}>
            	    <Text style={styles.textInfo}>01. Quem é você?</Text>
                </View>

                <View style={styles.fields}>
                    <TextInput 
                        placeholderTextColor="#c1bccc"
                        style={styles.input}
                        placeholder="Nome"
                    />
                    <TextInput 
                        placeholderTextColor="#c1bccc"
                        style={styles.input}
                        placeholder="Sobrenome"
                    />
                </View>

                <View style={styles.buttonView}>
                	<RectButton onPress={goToStep2Page} style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default SignUpStep1