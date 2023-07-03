import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [userData, setUserData] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = JSON.parse(localStorage.getItem('user'))

    // console.log(data)
    if (data && (data.email == userData)) {
      if (password == data.pass) {
        alert('Login Successfully')
        navigate('/')
      }
      else {
        alert('Wrong Password')
      }
    }
    else {
      alert("Invalid Details")
    }

  }
  return (
    <div className='login_container'>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <div className='register_content'>
          <div><input type="email" placeholder='Enter your email' value={userData} className='register_input'
            onChange={(e) => setUserData(e.target.value)} required
          /></div>
          <div><input type="password" placeholder='Choose Password' value={password} className='register_input'
            onChange={(e) => setPassword(e.target.value)} required
          /></div>

          <button type='submit' className='register_btn' >Login</button>

        </div>
      </form>
    </div>
  )
}
