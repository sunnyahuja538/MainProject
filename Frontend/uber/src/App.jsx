import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {

  return (
    <div>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<UserLogin/>}/>
     <Route path='/SignUp' element={<UserSignUp/>}/>
     <Route path='/captainSignUp' element={<CaptainSignup/>}/>
     <Route path='/captainLogin' element={<CaptainLogin/>}/>
      </Routes>

    </div>
  )
}

export default App