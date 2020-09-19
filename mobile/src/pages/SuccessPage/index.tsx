import React from 'react'
import { View, Image, ImageBackground, Text, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import successIcon from '../../assets/images/others/done.png'

import {useRoute} from '@react-navigation/native'


function SuccessPage(){
    const {navigate} = useNavigation()
    const route: any = useRoute()

    function goToNextPage() {
        navigate(route.params.to)
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.info}>
                <ImageBackground resizeMode="contain" source={bgImage} style={styles.container}>
                    <Image source={successIcon}/>
                    <Text style={styles.textBig}>{route.params.title}</Text>
                    <Text style={styles.textSmall}>{route.params.description}</Text>
                </ImageBackground>
            </View>

            <View style={styles.bottom}>
                <View style={styles.buttonView}>
                    <RectButton onPress={goToNextPage} style={styles.button}>
                        <Text style={styles.buttonText}>{route.params.buttonText}</Text>
                    </RectButton>
                </View>
            </View>
 
        </View>
    )
}
export default SuccessPage