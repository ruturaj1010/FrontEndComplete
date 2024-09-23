import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App () {

  return (
    <UserContextProvider>
      <div className='h-screen w-screen flex flex-col justify-center items-center gap-10 bg-zinc-800'>
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  )
}

export default App
