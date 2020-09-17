import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenOne from '../pages/IntoScreens/screenOne'
import ScreenTwo from '../pages/IntoScreens/screenTwo'

import SignIn from '../pages/SignIn'

import SignUpStep1 from '../pages/SignUp/step1'
import SignUpStep2 from '../pages/SignUp/step2'

import RecoveryPassword from '../pages/RecoveryPassword'

import Success from '../pages/SuccessPage'


const { Navigator, Screen } = createStackNavigator()

function AuthStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
            	<Screen name="ScreenOne" component={ScreenOne}/>
                <Screen name="ScreenTwo" component={ScreenTwo}/>
                <Screen name="SignIn" component={SignIn}/>
                <Screen name="SignUpStep1" component={SignUpStep1}/>
                <Screen name="SignUpStep2" component={SignUpStep2}/>
                <Screen name="RecoveryPassword" component={RecoveryPassword}/>
                <Screen name="Success" component={Success}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AuthStack