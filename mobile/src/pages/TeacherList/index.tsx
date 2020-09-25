import React, {useState} from 'react'
import {View, ScrollView, Picker, Text, TextInput, Platform, KeyboardAvoidingView} from 'react-native'
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

                        <Picker
                            selectedValue={subject}
                            onValueChange={value=>setSubject(value)}
                            style={styles.input}
                        >
                            <Picker.Item label="Biologia" value="Biologia"/>
                            <Picker.Item label="Ciências" value="Ciências"/>
                            <Picker.Item label="Educação física" value="Educação física"/>
                            <Picker.Item label="Física" value="Física"/>
                            <Picker.Item label="Filosofia" value="Filosofia"/>
                            <Picker.Item label="Geografia" value="Geografia"/>
                            <Picker.Item label="História" value="História"/>
                            <Picker.Item label="Literatura" value="Literatura"/>
                            <Picker.Item label="Matemática" value="Matemática"/>
                            <Picker.Item label="Português" value="Português"/>
                            <Picker.Item label="Química" value="Química"/>
                            <Picker.Item label="Redação" value="Redação"/>
                            <Picker.Item label="Sociologia" value="Sociologia"/>
                        </Picker>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <Picker
                                    selectedValue={week_day}
                                    onValueChange={value=>setWeek_day(value)}
                                    style={styles.input}
                                >
                                    <Picker.Item label="Domingo" value="0"/>
                                    <Picker.Item label="Segunda-feira" value="1"/>
                                    <Picker.Item label="Terça-feira" value="2"/>
                                    <Picker.Item label="Quarta-feira" value="3"/>
                                    <Picker.Item label="Quinta-feira" value="4"/>
                                    <Picker.Item label="Sexta-feira" value="5"/>
                                    <Picker.Item label="Sábado" value="6"/>
                                </Picker>
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