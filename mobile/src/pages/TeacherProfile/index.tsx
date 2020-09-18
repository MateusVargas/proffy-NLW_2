import React, { useEffect, useState } from 'react'
import { View, Image, Text, Picker, ScrollView, TouchableOpacity, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

function Profile() {
    const {navigate} = useNavigation()

    const [formData, setFormData] = useState({
        whatsapp: '',
        bio: '',
        subject: '',
        cost: ''
    })
    
    const [schedules, setSchedule] = useState([
       {week_day: 0, from: '', to: ''}
    ])
    const [selectedDay, setSelectedDay] = useState('1')

    useEffect(()=>{
        
    },[])

    function addSchedule(){
        setSchedule([
            ...schedules,
            {week_day: 0, from: '', to: ''}
        ])
    }

    function removeSchedule(schedule: any){
        const filteredSchedules = schedules.filter(sc=>sc !== schedule)
        setSchedule(filteredSchedules)
    }

    function goToFormPage() {
        navigate('TeacherForm')
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                topBarTitle="Meu perfil"
                profileData={{
                    subject: 'Geografia',
                    avatar: 'https://avatars1.githubusercontent.com/u/50881853?s=460&u=66d473275230b8374d5a1856f17996fcd4b13400&v=4',
                    name: 'joao'
                }}
            />

            <ScrollView style={styles.containerProfile}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <View style={styles.data}>
                    
                    <View style={styles.fields}>
                        <Text style={styles.formTitle}>Seus dados</Text>

                        <View style={styles.line}/>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Whatsapp
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={formData.whatsapp}
                                onChangeText={value=>setFormData({...formData, whatsapp: value})}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Bio
                            </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={15} 
                                style={styles.textarea}
                                value={formData.bio}
                                onChangeText={value=>setFormData({...formData, bio: value})}
                            />
                        </View>

                        <Text style={styles.formTitle}>Sobre a aula</Text>
                        
                        <View style={styles.line}/>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Matéria
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={formData.subject}
                                onChangeText={value=>setFormData({...formData, subject: value})}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Custo da sua hora por aula
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={formData.cost}
                                onChangeText={value=>setFormData({...formData, cost: value})}
                            />
                        </View>

                        <Text style={styles.formTitle}>Horários disponíveis</Text>
                        <TouchableOpacity onPress={addSchedule}>
                            <Text style={styles.newHour}>
                                + Novo horário
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.line}/>

                        {schedules.map((schedule,index)=>{
                        return(
                        <View key={schedule.week_day} style={styles.schedules}>
                            <View style={styles.containerField}>
                                <Text style={styles.containerFieldText}>
                                    Dia da semana
                                </Text>
                                <Picker
                                    selectedValue={selectedDay}
                                    onValueChange={(day,index)=>setSelectedDay(day)}
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


                            <View style={styles.containerInline}>
                                <View style={styles.containerInlineArea}>
                                    <Text style={styles.containerFieldText}>
                                        De
                                    </Text>
                                    <TextInput 
                                       style={styles.inlineInput}                                           style={styles.inlineInput}
                                     />
                                </View>
                                    <View style={styles.containerInlineArea}>
                                        <Text style={styles.containerFieldText}>
                                            Até
                                        </Text>
                                        <TextInput 
                                            style={styles.inlineInput}
                                        />
                                    </View>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1,height:2,backgroundColor:'red'}}/>
                                    <View style={{marginLeft:5,marginRight:5}}>
                                        <TouchableOpacity onPress={e=>{removeSchedule(schedule)}}>
                                            <Text style={styles.removeHour}>
                                                Excluir horário
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                <View style={{flex:1,height:2,backgroundColor:'red'}}/>
                            </View>
                        </View>
                        )
                        })}

                        <View style={styles.buttonView}>
                            <RectButton onPress={goToFormPage} style={styles.button}>
                                <Text style={styles.buttonText}>Salvar alterações</Text>
                            </RectButton>
                        </View>
                    </View>

                </View>

            </ScrollView>            
            
        </View>
    )
}
export default Profile