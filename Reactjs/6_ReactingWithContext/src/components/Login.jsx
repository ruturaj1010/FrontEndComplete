import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'

const Login = () => {

  const [username, setUsername] = useState( "" )
  const [password, setPassword] = useState( "" )

  const { setUser } = useContext( userContext )

  const handleSubmit = ( e ) => {
    e.preventDefault()
    setUser( {username, password })
  }

  return (
    <div className='bg-zinc-400 h-2/4 w-2/4 flex flex-col justify-center items-center gap-5'>
      <h1 className='text-2xl'>Login</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <input value={ username } onChange={ ( e ) => { setUsername( e.target.value ) } } className='px-2' type="text" placeholder='username' />
        <input value={ password } onChange={ ( e ) => { setPassword( e.target.value ) } } className='px-2' type="text" placeholder='password' />
        <button onClick={ handleSubmit } className='px-3 py-1 bg-red-400 rounded-sm'>Log-in</button>
      </div>
    </div>
  )
}

export default Login
