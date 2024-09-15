import React from 'react'
import { useForm } from 'react-hook-form'


const Form = ( { handleFormSubmitData } ) => {

  const { register, handleSubmit , reset } = useForm();

  const handleFormSubmit = (data) => { 
    handleFormSubmitData(data);
    reset();
  }
  
  return (
    <form className='mt-10 flex justify-center items-center gap-5' onSubmit={ handleSubmit( handleFormSubmit ) }>
      <input { ...register( "name" ) } className='py-1 px-3 text-slate-950 text-sm font-semibold rounded-md outline-none' type="text" name="name" id="name" placeholder='Name' required />
      <input { ...register( "email" ) } className='py-1 px-3 text-slate-950 text-sm font-semibold rounded-md outline-none' type="email" name="email" id="email" placeholder='Email' required />
      <input { ...register( "image" ) } className='py-1 px-3 text-slate-950 text-sm font-semibold rounded-md outline-none' type="url" name="image" id="image" placeholder='Image URL' required />
      <input className='py-2 px-5 bg-sky-500 text-zinc-50 text-xs font-semibold rounded-md' type="submit" value="Submit Now" />
    </form>
  )
}

export default Form;