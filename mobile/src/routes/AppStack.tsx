import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Landing from '../pages/Landing'
import StudyTabs from './StudyTabs'
import Profile from '../pages/TeacherProfile'
import TeacherForm from '../pages/TeacherForm'

import Success from '../pages/SuccessPage'

const { Navigator, Screen } = createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Study" component={StudyTabs}/>
                <Screen name="Profile" component={Profile}/>
                <Screen name="TeacherForm" component={TeacherForm}/>
                <Screen name="Success" component={Success}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppStack