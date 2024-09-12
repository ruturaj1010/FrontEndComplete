import React from 'react'
import { useForm } from 'react-hook-form'

const Form_3 = () => {

    const { register, handleSubmit } = useForm();

    return (
        <form action="" className='p-10' onSubmit={ handleSubmit( data => console.log( data ) ) }>
            <input { ...register( 'name' ) } type="text" placeholder='Name' />
            <input { ...register( 'number' ) } type="number" placeholder='Number' />
            <input type="submit" />
        </form>
    )
}

export default Form_3;
