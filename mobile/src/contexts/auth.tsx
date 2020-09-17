import React, { createContext, useEffect, useState, useContext } from 'react'
import { AsyncStorage } from 'react-native'

import * as auth from '../services'
import api from '../services/api'

interface User{
    name: string
    email: string
}

interface AuthContextTypes{
    signed: boolean
    user: User | null
    loading: boolean
    signIn(): Promise<void>
    signOut(): void
}

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes)
    
export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadStorageUser(){
            const user = await AsyncStorage.getItem('user')
            const token = await AsyncStorage.getItem('token')

            if(user && token){
                api.defaults.headers.Authorization = `Bearer ${token}`
                setUser(JSON.parse(user))
                setLoading(false)
            }
        }
        loadStorageUser()
    },[])

    async function signIn(){
        const response = await auth.signIn()
        setUser(response.user)

        await AsyncStorage.setItem('user',JSON.stringify(response.user))
        await AsyncStorage.setItem('token',response.token)

        api.defaults.headers.Authorization = `Bearer ${response.token}`
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