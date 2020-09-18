import React, { createContext, useEffect, useState, useContext } from 'react'
import { AsyncStorage } from 'react-native'

import * as auth from '../services'
import api from '../services/api'

interface User{
    id: number
    name: string
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
                setUser({
                    id: response.data.account.id,
                    name: response.data.account.name,
                    email: response.data.account.email
                })
                //await AsyncStorage.setItem('user',JSON.stringify(response.data.account.id))
                await AsyncStorage.setItem('token',response.data.metadata.token)
                api.defaults.headers.Authorization = `Bearer ${response.data.metadata.token}`  
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
       // setUser(response.user)

        //await AsyncStorage.setItem('user',JSON.stringify(response.user))
        //await AsyncStorage.setItem('token',response.token)

       // api.defaults.headers.Authorization = `Bearer ${response.token}`
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