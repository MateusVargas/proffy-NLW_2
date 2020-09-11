import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'

function ScreenTwo() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

    function goToStudyPages() {
        navigate('Study')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                
            	</ImageBackground>
            </View>

            <View style={styles.bottom}>
            	<Text style={styles.number}>02.</Text>
            	<Text style={styles.text}>
                    Ou dê aulas sobre o que você mais conhece
            	</Text>
            	<RectButton style={styles.button}>
                    <Text style={styles.buttonText}>VAMOS LÁ!</Text>
                </RectButton>
            </View>
        </View>
    )
}
export default ScreenTwo