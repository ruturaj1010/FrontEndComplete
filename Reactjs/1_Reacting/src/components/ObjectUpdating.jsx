import React , {useState} from 'react'

function ObjectUpdating () {

    const [val, setVal] = useState([ { name: "Ruturaj", age: 21 }, { name: "Ayush", age: 20 } ])

    return (
        <div className='p-10 bg-rose-200'>
            {val.map((item , index)=>{
                return <div key={index}>
                    <h1>Name: {item.name}</h1>
                    <h1>Age: {item.age}</h1>
                </div>
            })}
            <button onClick={ () => setVal(()=> val.map((item)=> item.name === "Ayush" ? { name: "Ayush", age: 21 }: item) )}  className='py-2 px-3 text-xs font-semibold bg-blue-500 text-zinc-200 rounded-md'>Change Age</button>
        </div>
    )
}

export default ObjectUpdating;
