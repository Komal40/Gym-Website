import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import {Link} from 'react-scroll'
import {BrowserRouter, useNavigate} from 'react-router-dom'

export default function Navbar() {

  // const navigate=useNavigate()
  
  const [active, setActive] = useState(false)

  return (

        <nav className='nav'
        // className={active?'nav-active':'nav'}
        >
        <Link to='#' className='logo' >
          <img src={logo} alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><a href='#'>Home</a> </li>
          <li><a href='#about'>About</a> </li>
          <li><a href='#program'>Program</a> </li>
          <li><a href='#training'>Training</a> </li>
          <li><a href='#pricing'>Pricing</a> </li>
          <li><a style={{backgroundColor:'red'}} >Join Us</a> </li>
        </ul>
        </nav>

  )
}


















