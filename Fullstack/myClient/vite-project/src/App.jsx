import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Navigate, Route, RouterContextProvider, Routes } from 'react-router'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import useAuthStore from './zustand/authStore.js'
import AuthProtectedRoutes from './routes/AuthProtectedRoutes.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

function App() {

  let authUser = useAuthStore((state) => state.user);
  console.log('Auth User:', authUser);



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


  return (
    <>
      <Routes>
        {/* auth routes */}

        <Route path='/login' element={
          !authUser ?
          <Login /> : <Navigate to={'/dashboard'} replace/>
          } />
        <Route path='/register' element={!authUser ?
          <Register /> : <Navigate to={'/dashboard'} replace/>} />

        {/* protected routes */}
        <Route element={<AuthProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<h2>Settings</h2>} />

        </Route>


        {/* default routes */}

          <Route path='*'
          element={
            <Navigate to={authUser? '/dashboard': '/login'} replace/>
          }
          />



      </Routes>

    </>
  )
}

export default App
