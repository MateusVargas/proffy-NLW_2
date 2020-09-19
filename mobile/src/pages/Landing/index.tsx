import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import exitIcon from '../../assets/images/others/exit.png'

import api from '../../services/api'

import { useAuth } from '../../contexts/auth'

function Landing() {
    const {navigate} = useNavigation()

    const { signOut, user } = useAuth()
    
    const [totalConnections,setTotalConnections] = useState(0)

    useEffect(()=>{
        api.get('/connections').then(resp => setTotalConnections(resp.data.total))
    },[])

    async function handleSignOut(){
        await signOut()
    }

    function goToTeacherForm(){
        navigate('TeacherForm')
    }
    function goToStudyPages() {
        navigate('Study')
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topbar}>
                    <Text style={{color: '#fff'}}>{user?.name}</Text>
                    <TouchableOpacity style={styles.exit} onPress={handleSignOut}>
                        <Image source={exitIcon}/>
                    </TouchableOpacity>
                </View>
                <Image source={landingImg} style={styles.banner}/>
            </View>
            
            <View style={styles.actions}>
                <Text style={styles.title}>
                    Seja Bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton onPress={goToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                        <Image source={studyIcon}/>
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>
                    <RectButton onPress={goToTeacherForm} style={[styles.button, styles.buttonSecondary]}>
                        <Image source={giveClassesIcon}/>
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                </View>

                    <Text style={styles.totalConnections}>
                        Total de {totalConnections} conexões já realizadas {' '}
                        <Image source={heartIcon}/>
                    </Text>
            </View>
            
        </View>
    )
}
export default Landing