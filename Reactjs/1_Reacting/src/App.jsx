import React, { useState } from 'react';
import Card from './components/Card';
import Article from './components/Article';

function App () {

  const [val, setval] = useState( 10 );

  const [item, setItem] = useState( { name: 'ruturaj', isBanned: false } )

  return (
    <>
      <div className='m-10'>
        <h1 className='text-3xl'>{ val }</h1>
        <button onClick={ () => setval( ( prev ) => prev + 1 ) } className='text-sm py-1 px-3 rounded-md bg-zinc-800 text-zinc-50'>Update Score</button>
      </div>
      <div className='m-10'>
        <h1>{ item.name }</h1>
        <h1>{ item.isBanned.toString() }</h1>
        <button onClick={ () => setItem( { ...item, isBanned: !item.isBanned } ) } className='text-sm py-1 px-3 rounded-md bg-zinc-800 text-zinc-50'>Banned</button>
      </div>
    </>
  )
}

export default App;