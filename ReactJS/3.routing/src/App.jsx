import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './pages/landing/Landing'
import Settings from './pages/settings/Settings'
import NotFound from './pages/NotFound'
import Contact from './pages/contact/Contact'
import Auth from './pages/auth/Auth'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import User from './pages/users/User'


function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<Landing/>}/>
        <Route path='/settings' element={<Settings/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/user/:id' element={<User/>} /> */}

      <Route path='/auth' element={<Auth/>}>
        {/* <Route index  element={<Login/>}/> */}
        <Route path='login'  element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
    </>
  )
}

export default App


