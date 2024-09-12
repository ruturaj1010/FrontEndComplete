import React, { useState } from 'react'

const Form = () => {

  const [val, setVal] = useState( { name: "", number: "", email: "" } )

  const handleSubmit = ( e ) => {
    e.preventDefault()
    console.log( val );
  }

  return (
    <form className='p-10' action="" onSubmit={ handleSubmit } >
      <input onChange={ ( event => setVal( { ...val, name: event.target.value } ) ) } type="text" placeholder='Name' />
      <input onChange={ ( event => setVal( { ...val, number: event.target.value } ) ) } type="number" placeholder='Number' />
      <input onChange={ ( event => setVal( { ...val, email: event.target.value } ) ) } type="email" placeholder='Email' />
      <input type="submit" />
    </form>
  )
}

export default Form;
