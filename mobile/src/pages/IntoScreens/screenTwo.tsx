import React from 'react'
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import bgImage from '../../assets/images/give-classes-background.png'
import Icon from '../../assets/images/others/study.png'
import currentPageIcon from '../../assets/images/others/currentpage.png'
import nextIcon from '../../assets/images/others/next.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04d361',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 40,
        paddingRight: 40,
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
    next: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
    }
})

function ScreenTwo() {
    const {navigate} = useNavigation()

    function goToLoginPage() {
        navigate('SignIn')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <Image source={Icon}/>
            	</ImageBackground>
            </View>

            <View style={styles.bottom}>
            	<Text style={styles.number}>02.</Text>
            	<Text style={styles.text}>
                    Ou dê aulas sobre o que você mais conhece
            	</Text>

            	<View style={styles.next}>
                    <Image source={currentPageIcon} style={{transform:[{scaleX:-1}]}}/>
                    <TouchableOpacity onPress={goToLoginPage}>
                        <Image source={nextIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default ScreenTwo