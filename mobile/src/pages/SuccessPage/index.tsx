import React from 'react'
import { View, Image, ImageBackground, Text, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import {BorderlessButton} from 'react-native-gesture-handler'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import successIcon from '../../assets/images/others/done.png'


function SuccessPage(){
    const {navigate} = useNavigation()
    const route: any = useRoute()

    function goToNextPage() {
        navigate(route.params.to)
    }

    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={bgImage} style={styles.content}>
                <Image source={successIcon}/>
                <Text style={styles.textBig}>{route.params.title}</Text>
                <Text style={styles.textSmall}>{route.params.description}</Text>
            </ImageBackground>

            <RectButton onPress={goToNextPage} style={styles.button}>
                <Text style={styles.buttonText}>{route.params.buttonText}</Text>
            </RectButton>
        </View>
    )
}
export default SuccessPage