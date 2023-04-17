import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard/index.jsx'
import { LoginPage } from './pages/login/index.jsx'
import { RegisterPage } from './pages/register/index.jsx'
import { GlobalStyle } from './styles/global'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
      <div className="App">
        <GlobalStyle/>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
      </div>
  )
}

export default App
