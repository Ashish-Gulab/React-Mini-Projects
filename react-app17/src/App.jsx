import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';
import User from './User';

const App=()=> {
  return (
    <>
      <Routes>
        {/* if the exact page is not showing then use the exact keyword */}
        {/* <Route exact path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/user/:fName/:lName' element={<User/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
