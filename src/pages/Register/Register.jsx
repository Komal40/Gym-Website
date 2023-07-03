import React, { useState } from 'react'
import Login from '../Login/Login'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = '';

    if (!emailRegex.test(email)) {
      errorMessage = 'This is an invalid email';
    } else if (checkEmailExists(email)) {
      errorMessage = 'This is an already existing email';
    }

    if (errorMessage) {
      alert(errorMessage);
      return
    }

    if (pass !== confirmPass) {
      alert('Password not Match')
      return
    }

    const user = {
      name,
      email,
      pass,
      confirmPass
    }

    localStorage.setItem('user', JSON.stringify(user))
    setName('')
    setEmail('')
    setPass('')
    setConfirmPass('')
    alert('Register Successfully')
    navigate('/#')

  }

  const checkEmailExists = (email) => {
    const existingUser = JSON.parse(localStorage.getItem('user'));
    return existingUser && existingUser.email === email;
  }


  return (
    <div className='register_container'>
      {/* {showAlert && ( 
        <Alert variant='filled' severity='error'>
          {email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            ? 'This is an invalid email'
            : !checkEmailExists(email)
            ? 'This is an already existing email'
            : 'Password doesn\'t match!!'}
        </Alert>
      )} */}
      <form onSubmit={handleSubmit}>
        <div className='register_content'>
          <div ><input type="text" placeholder='Enter Your Full Name' value={name} className='register_input'
            onChange={(e) => setName(e.target.value)} required
          /></div>
          <div><input type="email" placeholder='Enter your email' value={email} className='register_input'
            onChange={(e) => setEmail(e.target.value)} required
          /></div>
          <div><input type="password" placeholder='Choose Password' value={pass} className='register_input'
            onChange={(e) => setPass(e.target.value)} required
          /></div>
          <div><input type="password" placeholder='Confirm password' value={confirmPass} className='register_input'
            onChange={(e) => setConfirmPass(e.target.value)} required
          /></div>
          <button type='submit' className='register_btn'>Register</button>
          <div>
            <p>Already have an Account? <span><a href='/login'>Login</a></span></p>
          </div>
        </div>
      </form>
    </div>
  )
}
