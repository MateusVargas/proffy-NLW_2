import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenOne from '../pages/IntoScreens/screenOne'
import ScreenTwo from '../pages/IntoScreens/screenTwo'

import SignIn from '../pages/SignIn'

import SignUpStep1 from '../pages/SignUp/step1'
import SignUpStep2 from '../pages/SignUp/step2'

import RecoveryPassword from '../pages/RecoveryPassword'

import SuccessSignUp from '../pages/SignUp/success'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'
import Profile from '../pages/TeacherProfile'
import TeacherForm from '../pages/TeacherForm'

const { Navigator, Screen } = createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
            	<Screen name="ScreenOne" component={ScreenOne}/>
                <Screen name="ScreenTwo" component={ScreenTwo}/>
                <Screen name="SignIn" component={SignIn}/>
                <Screen name="SignUpStep1" component={SignUpStep1}/>
                <Screen name="SignUpStep2" component={SignUpStep2}/>
                <Screen name="RecoveryPassword" component={RecoveryPassword}/>
                <Screen name="SuccessSignUp" component={SuccessSignUp}/>
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTabs}/>
                <Screen name="Profile" component={Profile}/>
                <Screen name="TeacherForm" component={TeacherForm}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppStack