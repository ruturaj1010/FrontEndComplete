import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => {
        // navigate('/user');
        navigate(-1)      // both the fuctions will going to work use any of them
    }

  return (
    <div className='flex flex-col gap-5 mt-10 w-2/3 mx-auto bg-cyan-200'>
      <h1 className='text-xl font-semibold'>Welcome this is {name}</h1>
      <p>This is a simple React app with a About page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus blanditiis reprehenderit, harum fuga incidunt reiciendis explicabo accusantium possimus dignissimos veritatis.</p>

      <button onClick={handleGoBack} className='w-fit bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
        Go Back
      </button>

    </div>
  )
}

export default UserDetails
