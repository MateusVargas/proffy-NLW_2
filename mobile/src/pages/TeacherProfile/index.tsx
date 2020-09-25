import React, { useEffect, useState } from 'react'
import { View, Image, Text, Picker, ScrollView, ActivityIndicator, Alert, TouchableOpacity, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

import api from '../../services/api'

interface Teacher{
    id: number
    name: string
    avatar: string
    whatsapp: string
    bio: string
    subject: string
    cost: string
}

interface Schedules{
    week_day: number
    from: string
    to: string
}

function Profile() {
    const {navigate} = useNavigation()
    const [loading, setLoading] = useState(true)

    const [teacher, setTeacher] = useState({} as Teacher)

    const [formData, setFormData] = useState({
        whatsapp: '',
        bio: '',
        subject: '',
        cost: ''
    })
    
    const [schedules, setSchedule] = useState([{} as Schedules])

    useEffect(()=>{
        async function getTeacher(){
            try{
                const response = await api.get('/classes-profile')
                if(response.data.length !== 0){
                    setTeacher(response.data[0])
                    if(response.data[0].schedule){
                        setSchedule(response.data[0].schedule)
                    }
                    else{
                        setSchedule([])
                    }
                }
            }catch(error){
                Alert.alert('Não foi possível buscar os dados')
            }
            setLoading(false)
        }
        getTeacher()
    },[])

    function addSchedule(){
        if(schedules.length !== 0){
            setSchedule([
                ...schedules,
                {week_day: 0, from: '', to: ''}
            ])
        }
        else{
            setSchedule([
                {week_day: 0, from: '', to: ''}
            ])
        }
    }

    function setScheduleItemValue(position:number,field:string,value:string){
        const newValues = schedules.map((sc,index)=>{
            if(index === position){
                return {
                    ...sc,
                    [field]: value
                }
            }
            return sc
        })
        setSchedule(newValues)
    }

    function removeSchedule(schedule: any){
        const filteredSchedules = schedules.filter(sc=>sc !== schedule)
        setSchedule(filteredSchedules)
    }

    function goToFormPage() {
        navigate('TeacherForm')
    }

    async function handleUpdate() {
        setLoading(true)
        try{
            const data = {
                ...teacher,
                schedule: schedules
            }
            const response = await api.put('/classes-profile',data)
            if(response.status === 204){
                navigate('Success',{
                    title: 'Cadastro Atualizado!',
                    description: 'Tudo certo, você atualizou o seu cadastro. Agora é só ficar de olho no seu WhatsApp',
                    buttonText: 'Ir para home',
                    to: 'Landing'
                })
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#8257E5"/>
            </View>
        )
    }


    return(
        <View style={styles.container}>
            <PageHeader 
                topBarTitle="Meu perfil"
                profileData={{
                    subject: teacher.subject,
                    avatar: teacher.avatar,
                    name: teacher.name
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
                                value={teacher.whatsapp}
                                onChangeText={value=>setTeacher({...teacher, whatsapp: value})}
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
                                value={teacher.bio}
                                onChangeText={value=>setTeacher({...teacher, bio: value})}
                            />
                        </View>

                        <Text style={styles.formTitle}>Sobre a aula</Text>
                        
                        <View style={styles.line}/>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Matéria
                            </Text>

                            <Picker
                                selectedValue={teacher.subject}
                                onValueChange={value=>setTeacher({...teacher, subject: value})}
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
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Custo da sua hora por aula
                            </Text>
                            <TextInput
                                style={styles.input}
                                value={String(teacher.cost)}
                                keyboardType="numeric"
                                onChangeText={value=>setTeacher({...teacher, cost: value})}
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
                        <View key={index} style={styles.schedules}>
                            <View style={styles.containerField}>
                                <Text style={styles.containerFieldText}>
                                    Dia da semana
                                </Text>
                                <Picker
                                    selectedValue={String(schedule.week_day)}
                                    onValueChange={value=>setScheduleItemValue(index,'week_day',value)}
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
                                       value={schedule.from}
                                       onChangeText={value=>setScheduleItemValue(index,'from',value)}
                                       style={styles.inlineInput}
                                     />
                                </View>
                                    <View style={styles.containerInlineArea}>
                                        <Text style={styles.containerFieldText}>
                                            Até
                                        </Text>
                                        <TextInput 
                                            value={schedule.to}
                                            onChangeText={value=>setScheduleItemValue(index,'to',value)}
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
                            <RectButton onPress={handleUpdate} style={styles.button}>
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