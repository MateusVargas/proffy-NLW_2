import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground, Picker, TextInput, TouchableOpacity, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
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

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Nome
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Avatar
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Whatsapp
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Bio
                            </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={15} 
                                placeholderTextColor="#c1bccc"
                                style={styles.textarea}
                            />
                        </View>

                        <Text style={styles.formTitle}>Sobre a aula</Text>
                        
                        <View style={styles.line}/>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Matéria
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Custo da sua hora por aula
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
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
                                            placeholderTextColor="#c1bccc"                                            style={styles.inlineInput}
                                        />
                                    </View>
                                    <View style={styles.containerInlineArea}>
                                        <Text style={styles.containerFieldText}>
                                            Até
                                        </Text>
                                        <TextInput 
                                            placeholderTextColor="#c1bccc"
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