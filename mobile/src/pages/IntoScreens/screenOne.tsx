import React, { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import bgImage from '../../assets/images/give-classes-background.png'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },
    top: {
        flex: 1
    },
    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 50,
        paddingTop: 20,
        flexDirection: 'column'
    },
    number: {
        fontSize: 50,
        color: 'gray'
    },
    text: {
        fontSize: 20,
        maxWidth: 200,
        fontFamily: 'Poppins_400Regular',
        marginTop: 15
    },
    button: {
        height: 50,
        width: '48%',
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

function ScreenOne() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function goToScrennTwoPage() {
        navigate('ScreenTwo')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                
            	</ImageBackground>
            </View>

            <View style={styles.bottom}>
            	<Text style={styles.number}>01.</Text>
            	<Text style={styles.text}>
            		Encontre vários professores para ensinar você
            	</Text>
            	<RectButton onPress={goToScrennTwoPage} style={styles.button}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </RectButton>
            </View>
        </View>
    )
}
export default ScreenOne