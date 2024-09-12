import React, { useRef } from 'react'

const Form_1 = () => {

  const name = useRef(null)
  const age = useRef(null)
  const email = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name.current, age.current, email.current);
    console.log(name.current.value, age.current.value, email.current.value);
  }

  return (
    <form className='p-10' action="" onSubmit={handleSubmit} >
      <input ref={name} type="text" placeholder='Name' />
      <input ref={age} type="number" placeholder='Number' />
      <input ref={email} type="email" placeholder='Email' />
      <input type="submit" />
    </form>
  )
}

export default Form_1;
