import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Navbar=()=> {
  return (
    <>
    <nav className='nav_style'>
      <Link className='navb' to={'/'}>Home</Link><br />
      <Link className='navb' to={'/about'}> About</Link><br />
      <Link className='navb' to={'/contact'}>Contact</Link>
    </nav>
    <Outlet/> {/*Outlet renders the current route selected */}
    </>


    // It is similar to Link
    // <>
    //   <NavLink to={'/'}>Home</NavLink><br />
    //   <NavLink to={'/about'}> About</NavLink><br />
    //   <NavLink to={'/contact'}>Contact</NavLink>

    //   <Outlet/> {/* Outlet renders the current route selected*/}
    // </>
  )
}

export default Navbar;