import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenOne from '../pages/ScreenOne'
import ScreenTwo from '../pages/ScreenTwo'
import Login from '../pages/Login'
import SignUpStep1 from '../pages/SignUp/step1'
import SignUpStep2 from '../pages/SignUp/step2'
import SuccessSignUp from '../pages/SignUp/success'
import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
            	<Screen name="ScreenOne" component={ScreenOne}/>
                <Screen name="ScreenTwo" component={ScreenTwo}/>
                <Screen name="Login" component={Login}/>
                <Screen name="SignUpStep1" component={SignUpStep1}/>
                <Screen name="SignUpStep2" component={SignUpStep2}/>
                <Screen name="SuccessSignUp" component={SuccessSignUp}/>
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppStack