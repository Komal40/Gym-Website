import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import WholeTeam from './Components/Program/WholeTeam/WholeTeam.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route pah='/register' element={<Register />} />
        <Route path='/team' element={<WholeTeam />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
