import React, { useState } from 'react';
import './index.css';

const App = ()=>{

    let [curr, setCurr]=useState(0);

    let increment=(e)=>{
        setCurr(curr+1);
    }
    
    return(
        <>
        <h1 className='heading'>{curr}</h1>
        <button onClick={increment}>Click Here</button>
        </>
    );
}

export default App;