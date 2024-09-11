import React from 'react'

function Article () {

    const data = [
        { img: "https://imgs.search.brave.com/jSwFPYIgenRAOcTVXRI16B5U_p2zJHi9yFGY_nbb690/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/dXNlYXN0MS5rYXB3/aW5nLmNvbS9zdGF0/aWMvUjRELXVjLUV0/TTFmLWltYWdlLndl/YnA", title: 'Love story' },
        { img: "https://imgs.search.brave.com/jSwFPYIgenRAOcTVXRI16B5U_p2zJHi9yFGY_nbb690/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/dXNlYXN0MS5rYXB3/aW5nLmNvbS9zdGF0/aWMvUjRELXVjLUV0/TTFmLWltYWdlLndl/YnA", title: 'Mahiya vee' }
    ]

    const handleOnClickDownload = () => {
        alert('Download clicked');
    }

    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-zinc-900'>
                { data.map( ( elem, index ) => (
                    <div key={index} className='w-44 h-48 px-2 py-2 bg-slate-400 rounded-md'>
                        <img className='w-full h-2/3 rounded-md object-cover object-center' src={ elem.img } alt="img" />
                        <h1 className='text-base font-semibold mt-1'>{elem.title}</h1>
                        <button onClick={handleOnClickDownload} className='px-2 py-1 bg-green-300 rounded-md text-xs mt-1 font-semibold'>Download Now</button>
                    </div>
                ) ) }
            </div>
        </>
    )
}

export default Article
