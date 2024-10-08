import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import User from './Components/Users'
import Products from './Components/Products'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='h-screen w-screen bg-zinc-900 text-white'>
      <nav className='max-w-screen-lg mx-auto bg-slate-500 py-5 px-5 flex items-center justify-evenly text-xl font-semibold'>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/products'}>Products</Link>
      </nav>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/users' element={ <User /> } />
        <Route path='/products' element={ <Products /> } />
      </Routes>
    </div>
  )
}

export default App;