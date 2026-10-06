import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import useAuthStore from './zustand/authStore.js'

function App() {





  // useEffect( () => {
  //   (
  //     async () => {
  //       try {
  //         // console.log(import.meta.env.BACKEND_URL)
  //         const response = await axios.get(`${'http://localhost:3000/'}`)
  //         console.log(response.data)
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   )()

  // }, [])



  // useEffect(() => {

  //   let authUser = useAuthStore((state) => state.user);
  //   console.log('Auth User:', authUser); 

  // }, [])


  return (
    <>
    <Routes>
      {/* auth routes */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

    </Routes>

    </>
  )
}

export default App
