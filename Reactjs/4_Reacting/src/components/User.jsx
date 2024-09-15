import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='flex flex-col gap-5 mt-10 w-2/3 mx-auto bg-sky-50'>
      <h1 className='text-xl font-semibold'>Welcome to My User</h1>
      <p>This is a simple React app with a About page.</p>

      <div className='flex flex-col mt-9 w-1/3'>
        <Link to='/user/john' className='p-2 text-bold bg-red-100 hover:bg-red-200' >John</Link>
        <Link to='/user/ayush' className='p-2 text-bold bg-red-100 hover:bg-red-200' >Ayush</Link>
        <Link to='/user/sneha' className='p-2 text-bold bg-red-100 hover:bg-red-200' >Sneha</Link>
      </div>

      <hr />
      <Outlet/>
    </div>
  )
}

export default User
