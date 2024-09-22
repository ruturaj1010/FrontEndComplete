import React from 'react'
import Products from './components/Products'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center gap-8 font-bold text-xl py-3 bg-purple-300'>
        <Link to="/" >Home</Link>
        <Link to="/products" >Products</Link>
        <Link to="/about" >About</Link>
        <Link to="/services" >Services</Link>
      </div>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Services /> } />
      </Routes>
    </>
  )
}

export default App;
