import React from 'react'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartPage from './Components/cartPage'

const App = () => {
  return (
    <BrowserRouter>

    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<ProductCard />}/>
        <Route path ="/cart" element={<CartPage />}/>


      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
