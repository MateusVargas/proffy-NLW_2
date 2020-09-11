import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenOne from '../pages/ScreenOne'
import ScreenTwo from '../pages/ScreenTwo'
import Login from '../pages/Login'
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
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppStack