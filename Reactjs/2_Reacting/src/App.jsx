import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form_1 from './components/Form_1';
import Form_2 from './components/Form_2';
import Form_3 from './components/Form_3';

function App () {

  const data = [
    { image: "https://imgs.search.brave.com/C2-Ug7D7cxw_e7hYgTZR4hnck-h1QdBWpedikw_wKAo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NTI2NDk0L3Bob3Rv/L3JvY2tiYW5kLXNp/bmdlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ejBDZGJj/SU9FeUtXYWJDb25L/WG00akxrUHRZUjZa/bC1iMHl6NDNUWXc1/TT0", name: "Challenger", artist: "Arjit Singh", added: false },
    { image: "https://imgs.search.brave.com/RtHRxyqLdThPupgbC7IJDyoAW2-xoRUFHBSowTSVOIs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/YXVjYXNpYW4tZmVt/YWxlLXNpbmdlci1w/b3J0cmFpdC1pc29s/YXRlZC1uZW9uXzE1/NTAwMy00MjUwMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw", name: "Night Chnages", artist: "Virat Kohli", added: false },
    { image: "https://imgs.search.brave.com/gYZhs38GtKKq-Ex4umf4KKl0AVijnLYk_BJCChUz7AM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg2/OTUxMDkwL3Bob3Rv/L2ljZWxhbmRpYy1y/b2NrLWJhbmQtcGVy/Zm9ybWluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dnVS/emg1WXBFaVNXMU1W/RWF2YS1BT0NnaEZw/V3NiWEtwQVA3Yk9C/bFY1VT0", name: "Love story", artist: "Anushka Sharma", added: false },
    { image: "https://imgs.search.brave.com/RK41t7BKcvxhUCkRn3p5IHM-A4Ol4eC7t_3_1Ykdp8o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/Nzc5MjY1L3Bob3Rv/L2xpdmUtbXVzaWMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUppS0xKT0JVXzJN/OExWam42U3UyTUVP/SjgxT1o5R19lY1pD/SUtjdlpsdnc9", name: "True Love", artist: "Taylor Swift", added: false },
    { image: "https://imgs.search.brave.com/SJSVktFCcnHEiHr9zTkmGAR8Ozh-QYgbRvUEPRO76Dw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/ODY5ODgwL3Bob3Rv/L2d1aXRhci1jaGlj/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1JUVhEaVQ1ZlBm/V1hYRnhDMEp0Qmdk/c2FLaHZ1VkZTbEFT/ZFpBa01qakk0PQ", name: "Illuminati", artist: "Rohit Sharma", added: false },
    { image: "https://imgs.search.brave.com/gF9xDuYAunA5AgiA6FFJWnvK8MvbfQf2KTKyOG5FwNM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/NjQxMDU3L3Bob3Rv/L3NpbGhvdWV0dGUt/b2YtZmVtYWxlLWhv/bGRpbmctbWljcm9w/aG9uZS1pbi1wdXJw/bGUtbGlnaHQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU1s/bHYyVFFRUXprMEw0/QnhCNGN6ZkVPbkFO/Zk1hNHlsakQ3YUJh/bTlpclk9", name: "Ek Ladki", artist: "Ritika Sajdeha", added: false }
  ];

  const [songData, setSongData] = useState( data )

  const handleClick = ( cardIndex ) => {
    setSongData( prev => {
      return prev.map( ( item, index ) => {
        if ( index === cardIndex ) {
          return { ...item, added: !item.added }
        }
        return item;
      } )
    } )
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-300'>
        <Navbar data={ songData } />
        <div className='flex flex-shrink-0 flex-wrap justify-center md:justify-start px-20 mt-10 gap-10'>
          { songData.map( ( obj, index ) => {
            return <Card key={ index } data={ obj } handleClick={ handleClick } index={ index } />
          } ) }
        </div>
      </div>
      
      {/* this is seperate form component to learn useref and form handling */}
      <Form_1 />
      <Form_2 />
      <Form_3 />

    </>
  )
}

export default App;
