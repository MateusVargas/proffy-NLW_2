import React, { useEffect, useState } from 'react'
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import bgImage from '../../assets/images/give-classes-background.png'
import Icon from '../../assets/images/icons/give-classes.png'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04d361',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center',
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
        maxWidth: 210,
        fontFamily: 'Poppins_400Regular',
        marginTop: 15
    },
    button: {
        height: 50,
        width: '60%',
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

function ScreenTwo() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function goToLoginPage() {
        navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <View style={styles.image}>
                        <Image source={Icon}/>
                    </View>
            	</ImageBackground>
            </View>

            <View style={styles.bottom}>
            	<Text style={styles.number}>02.</Text>
            	<Text style={styles.text}>
                    Ou dê aulas sobre o que você mais conhece
            	</Text>
            	<RectButton onPress={goToLoginPage} style={styles.button}>
                    <Text style={styles.buttonText}>VAMOS LÁ!</Text>
                </RectButton>
            </View>
        </View>
    )
}
export default ScreenTwo