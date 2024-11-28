import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 mx-auto top-0 bg-transparent z-10 right-0 left-0 '>
        <NavLink to="/Portfolio/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" >
        <p className='blue-gradient-text'>AM</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
           <NavLink to="/Portfolio/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
           About
           </NavLink>
           <NavLink to="/Portfolio/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
           Projects
           </NavLink>
           <NavLink to="/Portfolio/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
           Contact
           </NavLink>
        </nav>
    </header>
  )
}
