import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full px-10 my-7 py-4 flex gap-7 bg-red-200' >
            <NavLink style={ ( e ) => {
                return {
                    color: e.isActive ? "blue" : "",
                    fontSize: e.isActive ? "18px" : "",
                    textDecoration: e.isActive ? "underline" : ""
                }
            } } to="/">Home</NavLink>

            <NavLink style={ ( e ) => {
                return {
                    color: e.isActive ? "blue" : "",
                    fontSize: e.isActive ? "18px" : "",
                    textDecoration: e.isActive ? "underline" : ""
                }
            } } to="/user">User</NavLink>

            <NavLink className={ ( e ) => {
                return [
                    e.isActive ? "text-blue-500" : "",
                    e.isActive ? "font-semibold " : "",
                    e.isActive ? "underline" : ""
                ].join(" ") 
            } } to="/about">About</NavLink>
        </nav>
    )
}

export default Navbar
