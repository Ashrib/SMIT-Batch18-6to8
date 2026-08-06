import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggleBtn = () => {

    let {theme, setTheme} = useContext(ThemeContext)

  return (
    <button
    onClick={()=> setTheme((theme == 'light')? 'dark' : 'light')}

    className={`${(theme=='light'?  'bg-black-100' : ' bg-gray-100')} inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0`}>
    
    {(theme == 'light')? "dark" : "light"}

    </button>
  )
}

export default ThemeToggleBtn