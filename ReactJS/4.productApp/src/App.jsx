import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Products from './pages/products/Products'
import Product from './pages/products/Product'
import SearchProduct from './pages/SearchProduct'

function App() {

  return (
    <>

      <Routes>
        <Route path={'/'} element={<Products/>}/>
        <Route path={'/search-product'} element={<SearchProduct/>}/>
        <Route path={'/product-details/:id'} element={<Product/>}/>

      </Routes>

    </>
  )
}

export default App
