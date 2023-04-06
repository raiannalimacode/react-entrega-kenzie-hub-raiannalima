import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard/index.jsx'
import { LoginPage } from './pages/login/index.jsx'
import { RegisterPage } from './pages/register/index.jsx'
import { GlobalStyle } from './styles/global'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  //definir o usuário como estado para renderizar os dados da dashboard

  return (
      <div className="App">
        <GlobalStyle/>
        <ToastContainer/>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage user={user}/>}/>
          <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
  )
}

export default App
