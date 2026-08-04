import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Route, Routes} from "react-router"
import LandingPage from './pages/LandingPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>

    </Routes>
   
   </>
  )
}

export default App
