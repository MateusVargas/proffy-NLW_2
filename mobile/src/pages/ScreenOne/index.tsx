import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'

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