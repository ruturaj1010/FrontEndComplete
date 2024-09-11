import React from 'react'

function Card () {

    const data = [{ image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Amazon Basics', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam voluptatem excepturi!", inStock: true },
    { image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Course AIML', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam voluptatem excepturi!", inStock: false},
    { image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Magic Moments', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam voluptatem excepturi!", inStock: false}
    ]
    return (
        <div className='w-full h-screen bg-zinc-500 flex justify-center items-center'>
            { data.map( ( elem, index ) => (
                 <div key={index} className='w-52 m-1 overflow-hidden rounded-md'>
                    <div className='w-full h-32 bg-slate-200 object-cover'>
                        <img src={elem.image} alt="img" />
                    </div>
                    <div className='w-full px-3 py-3 bg-slate-400'>
                        <h1 className='font-semibold'>{elem.name}</h1>
                        <p className='text-sm mt-2'>{elem.description}</p>
                        <button className={`py-1 px-3 text-xs ${elem.inStock? 'bg-blue-500':'bg-rose-600'} text-zinc-100 mt-2 rounded`}>{elem.inStock?'In stock':'Out of stock'}</button>
                    </div>
                </div>
            ) ) }
        </div>
    )
}

export default Card;
