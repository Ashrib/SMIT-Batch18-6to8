import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Products from './pages/products/Products'
import Product from './pages/products/Product'

function App() {

  return (
    <>

      <Routes>
        <Route path={'/'} element={<Products/>}/>
        <Route path={'/product-details/:id'} element={<Product/>}/>

      </Routes>

    </>
  )
}

export default App
