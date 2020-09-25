import React, {useContext} from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import LandingPage from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import SignIn from './pages/SignIn'

import SignUp from './pages/SignUp'
import SignUpSuccess from './pages/SignUp/success'

import RecoveryPassword from './pages/RecoveryPassword'
import RecoverySuccess from './pages/RecoveryPassword/success'
import ResetPassword from './pages/ResetPassword'

import TeacherProfile from './pages/TeacherProfile'

import { AuthContext } from './context/auth'

function CustomRoutes({isPrivate, ...rest}:any){
    const {signed} = useContext(AuthContext)

    if(isPrivate && !signed){
        return <Redirect to='/sign-in'/>
    }
    else if(!isPrivate && signed){
        return <Redirect to='/home'/>
    }

    return <Route {...rest} />
}

function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <CustomRoutes path='/' exact><Redirect to='/sign-in' /></CustomRoutes>
                <CustomRoutes path='/recovery-password'><RecoveryPassword/></CustomRoutes>
                <CustomRoutes path='/sign-in'><SignIn/></CustomRoutes>
                <CustomRoutes path='/sign-up'><SignUp/></CustomRoutes>
                <CustomRoutes isPrivate path='/home'><LandingPage/></CustomRoutes>
                <CustomRoutes isPrivate path='/study'><TeacherList/></CustomRoutes>
                <CustomRoutes isPrivate exact path='/give-classes'><TeacherForm/></CustomRoutes>
                <CustomRoutes isPrivate path='/give-classes/profile'><TeacherProfile/></CustomRoutes>

                <CustomRoutes path='/recovery-success'><RecoverySuccess/></CustomRoutes>
                <CustomRoutes path='/signup-success'><SignUpSuccess/></CustomRoutes>

                <CustomRoutes path='/reset'><ResetPassword/></CustomRoutes>

            </Switch>
        </BrowserRouter>
    )
}
export default Routes