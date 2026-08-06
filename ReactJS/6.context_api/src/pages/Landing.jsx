import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../context/ThemeContext';

const Landing = () => {
  let [count, setCount] = useState(0);


  /// use the context
  let {theme} = useContext(ThemeContext)
  console.log(theme)




  return (
    <div>

      <Navbar />
      <h2>Landing</h2>


      <h1>theme: {theme}</h1>
    </div>
  )
}

export default Landing