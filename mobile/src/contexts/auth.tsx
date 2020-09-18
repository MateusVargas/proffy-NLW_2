import React, { createContext, useEffect, useState, useContext } from 'react'
import { AsyncStorage, Alert } from 'react-native'

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
    signIn(data: any): Promise<void>
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

    async function signIn(data: any){
        try{
            setLoading(true)
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
        AsyncStorage.clear().then(()=>{
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