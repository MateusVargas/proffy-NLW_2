import React, { useState } from 'react'
import {View, ScrollView, Image, Text} from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import favoriteIcon from '../../assets/images/others/favorite.png'

import api from '../../services/api'


function Favorites(){

    const [favorites,setFavorites] = useState([])

    useFocusEffect(()=>{
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response)
                setFavorites(favoritedTeachers)
            }
        })
    })//toda vez que a tela estiver em foco será executado esse hook

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Meus proffys favoritos"
                topBarTitle="Estudar"
                headerRight={(
                    <Image source={favoriteIcon}/>
                )}
            />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher:Teacher) =>{
                    return(
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}
export default Favorites