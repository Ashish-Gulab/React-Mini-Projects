import React, { useState } from 'react';
import './index.css';
const App=()=>{

    let ctime=new Date().toLocaleTimeString();
    let [time, setTime]=useState(ctime);

    const setCurrTime=()=>{
        ctime=new Date().toLocaleTimeString();
        setTime(ctime);
    }

    // For digital clock 
    // we can use the setInterval method which require two arguments updated time and after how much time it should be updated , 1000 is milli seconds.
    setInterval(setCurrTime,1000);

    return(<><h1 className='heading'>{time}</h1>
        {/* <button onClick={setCurrTime}>Current Time</button> */}
        </>);
}

export default App;