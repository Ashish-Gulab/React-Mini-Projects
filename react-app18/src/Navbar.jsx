import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar=()=>{
    return(<>
        <nav className='nav_style'>
            <Link className='navb' to={'/'}>Home</Link>
            <Link className='navb' to={'/about'}>About</Link>
            <Link className='navb' to={'/search'}>Search</Link>
            <Link className='navb' to={'/contact'}>Contact</Link>
        </nav>

        <Outlet/>
    </>);
};

export default Navbar;