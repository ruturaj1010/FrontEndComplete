import React from 'react'

const Card = ( { data , handleClick , index} ) => {

    const { image, name, artist, added } = data;
    return (
        <div className='w-56 p-2 pb-6 bg-slate-50 rounded-md flex gap-3 relative mt-10'>
            <div className="bg-orange-600 w-16 h-16 rounded-md overflow-hidden">
                <img className='w-full h-full object-cover object-center' src={image} alt="img" />
            </div>
            <div className=''>
                <h3 className='font-bold text-base'>{name}</h3>
                <h5 className='text-sm'>{artist}</h5>
            </div>
            <div onClick={()=>handleClick(index)} className={`flex absolute -bottom-3 left-1/2 -translate-x-1/2 ${added? "bg-fuchsia-500":'bg-teal-600'} text-zinc-50 rounded-full py-1 px-3 text-xs whitespace-nowrap`}>{added?"Favourties❤️" : "Add to favourites"}</div>
        </div>
    )
}

export default Card;
