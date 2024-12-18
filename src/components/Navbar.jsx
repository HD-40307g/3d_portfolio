import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='header'>
            {/* Logo with accessibility improvements */}
            <NavLink 
                to='/' 
                className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' 
                aria-label='Navigate to homepage' 
                title='Navigate to homepage'
            >
                <p className='blue-gradient_text'>EM</p>
            </NavLink>
            {/* Navigation links */}
            <nav className='flex text-lg gap-7 fond-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-600' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
