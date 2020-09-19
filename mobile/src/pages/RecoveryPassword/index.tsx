import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import backIcon from '../../assets/images/icons/back.png'

function RecoveryPassword() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function handleGoBack() {
        navigate('SignIn')
    }

    function goToSuccessPage() {
        navigate('Success',{
            title: 'Redefinição enviada!',
            description: 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
            buttonText: 'Voltar ao login',
            to: 'SignIn'
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <Text style={styles.textTop}>Sua plataforma de estudos online.</Text>
            	</ImageBackground>
            </View>


            <View style={styles.bottom}>
            <View style={styles.backButton}>
                    <BorderlessButton onPress={handleGoBack}>
                        <Image source={backIcon} style={{tintColor: '#202024'}} resizeMode="contain"/>
                    </BorderlessButton>
             </View>
                <View style={styles.header}>
            	    <Text style={styles.textBig}>Esqueceu sua senha?</Text>
            	    <Text 
                        style={styles.textSmall}>
                        Não esquenta, {'\n'}
                        vamos dar um jeito nisso.
                    </Text>
                </View>

                <View style={styles.fields}>
                    <TextInput 
                        placeholderTextColor="#c1bccc"
                        style={styles.input}
                        placeholder="E-mail"
                    />
                </View>

                <View style={styles.buttonView}>
                	<RectButton onPress={goToSuccessPage} style={styles.button}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default RecoveryPassword