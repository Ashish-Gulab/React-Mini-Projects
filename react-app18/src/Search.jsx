import React, { useState } from 'react';
import Images from './Images';

const Search=()=>{

    const[name,setName]=useState('');

    const searchImage=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    };

    return(<>
        <h2>Live Image Searching</h2>
        <div className='input_search'>
            <input type="text" placeholder='Search an Image' value={name} onChange={searchImage}  />
        </div>
        
        <div className='img_style'>
            {name==='' ? null :<Images imgName={name}/>}
        </div>
    </>);
};

export default Search;