import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Registration from './Registration'

export default function Register() {
  return (
    <div>
        <Routes>
            <Route path='/register' component={<Registration/>}/>
            <Route path='/login' component={<Login/>}/>
        </Routes>
    </div>
  )
}
