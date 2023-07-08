import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Search from './Search';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound';
import './index.css';

const App=()=>{
    return(
    <>
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
                <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </>
    );
}

export default App;
