import React, { createContext, useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

interface User{
    id: number
    name: string
    surname: string
    email: string
}

interface AuthContextTypes{
    signed: boolean
    user: User | null
    loading: boolean
    signIn(data: any, remember: boolean): Promise<void>
    signOut(): void
}

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes)
    
export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function loadStorageUser(){
            setLoading(true)
            const user = await AsyncStorage.getItem('user')
            const token = await AsyncStorage.getItem('token')

            if(user && token){
                api.defaults.headers.Authorization = `Bearer ${token}`
                setUser(JSON.parse(user)) 
            }
            setLoading(false)
        }
        loadStorageUser()
    },[])

    async function signIn(data: any, remember:boolean){
        try{
            setLoading(true)
            if(remember){
                await AsyncStorage.multiSet(
                    [
                        ['email',JSON.stringify(data.email)],
                        ['password',JSON.stringify(data.password)]
                    ]
                )
            }
            else{
                const email = await AsyncStorage.getItem('email')
                const password = await AsyncStorage.getItem('password')

                if(email && password){
                     AsyncStorage.multiRemove(['email','password'])
                }
            }

            const response = await api.post('/sign-in',data)

            if(response.status === 200){
                setUser(response.data.account)
                await AsyncStorage.setItem('user',JSON.stringify(response.data.account))
                await AsyncStorage.setItem('token',response.data.metadata.token)
                api.defaults.headers.Authorization = `Bearer ${response.data.metadata.token}`  
            }
            
            setLoading(false)
        }catch(error){
            Alert.alert('Usuário ou senha incorretos')
            setLoading(false)
        }
    }

    function signOut(){
        AsyncStorage.multiRemove(['token','user']).then(()=>{
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user,user,signIn,signOut,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}