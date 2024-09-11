import React from 'react'

function FriendCard ({index, onclick , values }) {

    const {image , name , friends } = values;

    return (
        <div className='w-52 bg-blue-200 rounded-md overflow-hidden'>
            <img className='w-full h-36' src={image} alt="" />
            <div className='px-2 py-2'>
                <h3 className='text-xl font-semibold my-1'>{name}</h3>
                <button onClick={()=>onclick(index)} className='px-2 py-1 bg-orange-700 text-zinc-100 rounded-full'>{ friends ? 'Friends':'Add Friends'}</button>
            </div>
        </div>
    )

}

export default FriendCard;
