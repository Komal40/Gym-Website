import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Program from './Components/Program/Program'
import Pricing from './Components/Pricing/Pricing'
import { BrowserRouter as Router } from 'react-router-dom'
import Training from './Components/Training/Training'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Training />
      <Program />
      <Pricing />
      <Footer/>
    </>
  )
}

export default App
