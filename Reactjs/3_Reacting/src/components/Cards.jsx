import React from 'react'
import Card from './Card'

const Cards = ( { users , handleRemove } ) => {
  return (
    <div className='w-full p-4 h-96 max-h-96 flex justify-center items-center gap-4 flex-wrap overflow-y-auto'>
      {users.map((user , index )=>{
        return <Card key={index} index={index} user={user} handleRemove={handleRemove} />
      })}
    </div>
  )
}

export default Cards
