import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from "react-router"
import Landing from './pages/Landing'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/product-details/:id' element={<></>} />
      </Routes>

    </>
  )
}

export default App
