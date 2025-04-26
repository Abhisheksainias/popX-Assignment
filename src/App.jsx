import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import SignupPage from './components/SignupPage'
import AccountSettings from './components/AccountSettings'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<AccountSettings />} />
        </Routes>
      </div>

    </>
  )
}

export default App
