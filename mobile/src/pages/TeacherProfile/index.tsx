import React, { useEffect, useState } from 'react'
import { View, Image, Text, ScrollView, ImageBackground, TextInput, CheckBox, Platform, KeyboardAvoidingView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {RectButton, BorderlessButton} from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import styles from './styles'

import bgImage from '../../assets/images/give-classes-background.png'
import {Feather} from '@expo/vector-icons'

function Profile() {
    const {navigate} = useNavigation()
    

    useEffect(()=>{
        
    },[])

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
                        
                        <View style={styles.line}/>

                        <View style={styles.containerField}>
                            <Text style={styles.containerFieldText}>
                                Dia da semana
                            </Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                            />
                        </View>


                        <View style={styles.containerInline}>
                            <View style={styles.containerInlineArea}>
                                <Text style={styles.containerFieldText}>
                                    De
                                </Text>
                                <TextInput 
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.inlineInput}                                           style={styles.inlineInput}
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