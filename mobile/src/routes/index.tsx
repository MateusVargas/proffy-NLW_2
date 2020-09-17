import React from 'react'
import { View, ActivityIndicator } from 'react-native'


import AppStack from './AppStack'
import AuthStack from './AuthStack'

import { useAuth } from '../contexts/auth';

function Routes(){
	const { signed, loading } = useAuth()

	if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#8257E5"/>
            </View>
        )
    }
    
    return signed ? <AppStack/> : <AuthStack/>

}
export default Routes