import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

function TeacherForm(){

    const {navigate} = useNavigation()

    const [schedules, setSchedule] = useState([
       {week_day: 0, from: '', to: ''}
    ])
    

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

    function goToSuccessPage() {
        navigate('Success',{
            title: 'Cadastro Salvo!',
            description: 'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp',
            buttonText: 'Fazer login',
        })
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

                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Nome"
                        />
                        <TextInput
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Sobrenome"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="E-mail"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Whatsapp"
                        />
                        <TextInput
                            multiline={true}
                            numberOfLines={15} 
                            placeholderTextColor="#c1bccc"
                            style={styles.textarea}
                            placeholder="Bio"
                        />

                        <Text style={styles.formTitle}>Sobre a aula</Text>
                        
                        <View style={styles.line}/>

                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Matéria"
                        />
                        <TextInput 
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Custo da sua hora por aula"
                        />

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
                                <TextInput 
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Dia da semana"
                                />

                                <View style={styles.inlineButtons}>
                                    <TextInput 
                                        placeholderTextColor="#c1bccc"
                                        style={styles.inlineInput}
                                        placeholder="De"
                                    />
                                    <TextInput 
                                        placeholderTextColor="#c1bccc"
                                        style={styles.inlineInput}
                                        placeholder="Até"
                                    />
                                </View>

                                <TouchableOpacity onPress={e=>{removeSchedule(schedule)}}>
                                    <Text style={styles.removeHour}>
                                        Excluir horário
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            )
                        })}

                        <View style={styles.buttonView}>
                            <RectButton onPress={goToSuccessPage} style={styles.button}>
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