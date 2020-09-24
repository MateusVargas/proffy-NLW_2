import React, {useState} from 'react'
import {View, ScrollView, Text, TextInput, Platform, KeyboardAvoidingView} from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem,{Teacher} from '../../components/TeacherItem'
import {BorderlessButton, RectButton} from 'react-native-gesture-handler'

import AsyncStorage from '@react-native-community/async-storage'

import {Feather} from '@expo/vector-icons'
import api from '../../services/api'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList(){

    const [teachers,setTeachers] = useState([])
    const [isFilterVisible, setIsFilterVisible] = useState(false)

    const [favorites,setFavorites] = useState<number[]>([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response)//no storage só pode ter dados gravados em formato texto
                const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher)=>{
                    return teacher.id
                })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useFocusEffect(()=>{
        loadFavorites()
    })
    
    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function filterSubmit() {
        loadFavorites()
        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time
            }
        })
        setTeachers(response.data)
        setIsFilterVisible(false)
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                topBarTitle="Estudar"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff"/>
                    </BorderlessButton>
                )}
            >
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Matéria"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Dia da semana"
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Horário"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={filterSubmit}>
                            <Text style={styles.submitButtonText}>Buscar</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) =>{
                    return(
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )   

}
export default TeacherList