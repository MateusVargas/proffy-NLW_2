import React from 'react'
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import bgImage from '../../assets/images/give-classes-background.png'
import classIcon from '../../assets/images/others/aulas.png'
import currentPageIcon from '../../assets/images/others/currentpage.png'
import nextIcon from '../../assets/images/others/next.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        maxWidth: 200,
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

function ScreenOne() {
    const {navigate} = useNavigation()

    function goToScrennTwoPage() {
        navigate('ScreenTwo')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
            	<ImageBackground resizeMode="contain" source={bgImage} style={styles.top}>
                    <Image source={classIcon}/>
            	</ImageBackground>
            </View>

            <View style={styles.bottom}>
            	<Text style={styles.number}>01.</Text>
            	<Text style={styles.text}>
            		Encontre vários professores para ensinar você
            	</Text>

                <View style={styles.next}>
                    <Image source={currentPageIcon}/>
                    <TouchableOpacity onPress={goToScrennTwoPage}>
                        <Image source={nextIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default ScreenOne