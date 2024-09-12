import React from 'react';
import styles from './styles.module.css';

const Navbar = ({data}) => {

    return (
        <div className='w-full px-20 py-3 flex justify-between items-center font-bold'>
            <h3 className={`${styles.a} ${styles.b}`}>Orange</h3>
            <div className='px-3 py-1 flex justify-center items-center gap-2 bg-orange-600 text-zinc-50 rounded-md text-xs border-2 border-orange-600'>
                <h3>Favourites</h3>
                <h4>{data.filter(item=>{return item.added}).length}</h4>
            </div>
        </div>
    )
}

export default Navbar;