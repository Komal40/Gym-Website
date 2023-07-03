import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  
  return (
    <div id='main'>
      <div className='name'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span>WITH US</h1>
        <p className='details'>Build Your Body And Fitness With
          Professionals</p>
        <div>
          <button className='header-btn' onClick={()=>navigate('/register')}>Join With Us</button>
        </div>
      </div>
    </div>
  )
}

