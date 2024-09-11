import React, { useState } from 'react';

function BannedState () {

    const [val, setval] = useState( 10 );

    const [item, setItem] = useState( { name: 'ruturaj', isBanned: false } );

    return (
        <>
            <div className='m-10'>
                <h1 className='text-3xl'>{ val }</h1>
                <button onClick={ () => setval( ( prev ) => prev + 1 ) } className='text-sm py-1 px-3 rounded-md bg-zinc-800 text-zinc-50'>Update Score</button>
            </div>
            <div className='m-10'>
                <h1>name : { item.name }</h1>
                <h1>Ban Status: { item.isBanned.toString() }</h1>
                <button onClick={ () => setItem( { ...item, isBanned: !item.isBanned } ) } className={ `text-sm py-1 px-3 rounded-md ${item.isBanned ? "bg-rose-600" : "bg-blue-500"} text-zinc-50` }>Banned change</button>
            </div>
        </>
    )
}

export default BannedState;