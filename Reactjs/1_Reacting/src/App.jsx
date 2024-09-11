import React, { useState } from 'react';
import Card from './components/Card';
import Article from './components/Article';
import ObjectUpdating from './components/ObjectUpdating';
import FriendCard from './components/FriendCard';

function App () {

  const data = [
    { image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Amit', friends: false  },
    { image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Rohan', friends: false },
    { image: 'https://imgs.search.brave.com/VBdin9S3vgkP9xTdn_rx4RgaWiNjq-KJcnbLzEzURkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA', name: 'Mohan', friends: false }
  ]

  const [realData , setRealData] = useState(data);

  const handleFriendsClick = (cardIndex) => {
    setRealData( (previous)=>{
      return previous.map((item , index)=>{
        if(index === cardIndex) {
          return {...item , friends:!item.friends}
        }
        return item;
      })
    })
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-700 flex justify-center items-center gap-4'>
        {realData.map((item , index)=>{
          return <FriendCard key={index} index={index} onclick={handleFriendsClick} values={item}/>
        })}
      </div>
    </>
  )
}

export default App;