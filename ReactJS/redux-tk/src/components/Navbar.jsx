import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/slices/themeSlice'

const Navbar = () => {
    let theme = useSelector((state)=> state.theme.value)
    let count = useSelector((state)=> state.counter.value)

    let dispatch = useDispatch()
  return (
    <div style={{
        padding: '15px',
        borderBottom: '2px solid black'
    }}>
        <span>Nabvar</span>

        <span>theme now: {theme}</span>
        <span style={{padding:'5px'}}>counter: {count}</span>

        <button
        onClick={()=> dispatch(toggleTheme())}
        >{theme == 'light' ? 'dark' : 'light'}</button>

    </div>
  )
}

export default Navbar