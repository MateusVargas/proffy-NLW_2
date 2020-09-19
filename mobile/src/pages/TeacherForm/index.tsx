import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground, Alert, Picker, TextInput, ActivityIndicator, TouchableOpacity, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

import api from '../../services/api'


function TeacherForm(){

    const {navigate} = useNavigation()

    const [isRedirect, setIsRedirect] = useState(false)

    const [loading, setLoading] = useState(true)

    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        avatar: '',
        bio: '',
        subject: '',
        cost: ''
    })

    const [schedules, setSchedule] = useState([
       {week_day: 0, from: '', to: ''}
    ]) 
    

    useEffect(()=>{
        async function getTeacher(){
            try{
                const response = await api.get('/classes-profile')
                if(response.data.length !== 0){
                    setIsRedirect(true)
                }
            }catch(error){
                Alert.alert('Não foi possível buscar os dados')
            }
            setLoading(false)
        }
        getTeacher()
    },[])

    function addSchedule(){
        setSchedule([
            ...schedules,
            {week_day: 0, from: '', to: ''}
        ])
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

    async function handleCreateTeacher() {
        setLoading(true)

        const data = {
            name: formData.name,
            whatsapp: formData.whatsapp,
            avatar: formData.avatar,
            bio: formData.bio,
            subject: formData.subject,
            cost: formData.cost,
            schedule: schedules
        }
        //console.log(data)
        const response = await api.post('/classes',data)
        if(response.status === 201){
            navigate('Success',{
                title: 'Cadastro Salvo!',
                description: 'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp',
                buttonText: 'Ir para home',
                to: 'Landing'
            })
        }

        setLoading(false)
    }


    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#8257E5"/>
            </View>
        )
    }

    if(isRedirect){
        navigate('Profile')
    }


    return(
        <View style={styles.container}>
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
                topBarTitle="Dar aulas"
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
                                Nome
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={formData.name}
                                onChangeText={value=>setFormData({...formData, name: value})}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Avatar
                            </Text>
                            <TextInput 
                                style={styles.input}
                                value={formData.avatar}
                                onChangeText={value=>setFormData({...formData, avatar: value})}
                            />
                        </View>

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
                                        selectedValue={schedule.week_day}
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
                            <RectButton onPress={handleCreateTeacher} style={styles.button}>
                                <Text style={styles.buttonText}>Salvar alterações</Text>
                            </RectButton>
                        </View>
                    </View>

                </View>

            </ScrollView>            
            
        </View>
    )
}
export default TeacherForm