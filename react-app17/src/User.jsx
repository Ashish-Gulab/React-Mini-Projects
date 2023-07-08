import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User=()=>{

    // useParams is use to provide the parameters or props in the link 
    const {fName,lName}=useParams();

    const location=useLocation();

    return(<><h1>I am {fName} {lName}</h1>
        <p>{`My location is ${location.pathname}`}</p>
        {location.pathname===`/user/Ashish/Gulab` ? (<button onClick={()=>{alert("The Path name is /user/Ashish/Gulab")}}>Click here</button>):null}
    </>);
};

export default User;