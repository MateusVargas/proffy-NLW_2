import React, { ReactNode } from 'react'
import {View,Image,Text,Platform,KeyboardAvoidingView} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

import styles from './styles'
import backIcon from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps{
    title?: string,
    topBarTitle: string,
    headerRight?: ReactNode;//componente como propriedade
    profileData?: {
        subject: string | null, 
        avatar: string,
        name: string
    }
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, topBarTitle, headerRight, profileData, children }) => {

    const {navigate} = useNavigation()
    
    function handleGoBack() {
        navigate('Landing')
    }

    return(
        <View style={
            profileData ? 
            {
                height:300,
                padding: 40,
                backgroundColor: '#8257e5'
            }: 
                styles.container
            }
            >
            
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <Text style={styles.topBarTitle}>{topBarTitle}</Text>
                <Image source={logo} resizeMode="contain"/>
            </View>
            

            <View style={profileData ? {justifyContent:'center',flexDirection: 'row',
        alignItems: 'center'} : styles.header}>
        
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    {description && 
                        <Text style={styles.description}>{description}</Text>
                    }
                </View>

                {headerRight}
                {profileData && 
                    <View style={styles.profileData}>
                        <Image source={{uri:profileData.avatar}} resizeMode="contain" style={styles.avatar}/>
                        <Text style={styles.name}>{profileData.name}</Text>
                        <Text style={styles.subject}>{profileData.subject}</Text>
                    </View>
                }

                </KeyboardAvoidingView>
            </View>
           
            {children}
        </View>
    )
}
export default PageHeader