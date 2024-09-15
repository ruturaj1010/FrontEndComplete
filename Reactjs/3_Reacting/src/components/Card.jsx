import React from 'react'

const Card = ({user , handleRemove , index }) => {
  const {name , email , image } = user;
  return (
    <div className='w-52 h-60 p-2 rounded-lg bg-zinc-100 flex flex-col items-center'>
        <div className='w-[4vw] h-[4vw] mt-2 rounded-full overflow-hidden bg-blue-300'>
            <img className='w-full h-full object-cover object-center' src={image} alt="" />
        </div>
        <h1 className='my-1 text-xl font-semibold'>{name}</h1>
        <h4 className='text-xs font-semibold opacity-60 cursor-pointer'>{email}</h4>
        <p className='mt-1 text-center text-xs font-semibold tracking-tight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sequi sint et.</p>
        <button onClick={()=>handleRemove(index)} className='py-1 px-3 text-xs font-semibold bg-red-600 mt-3 text-zinc-50 rounded-md'>Remove it</button>
    </div>
  )
}

export default Card;
