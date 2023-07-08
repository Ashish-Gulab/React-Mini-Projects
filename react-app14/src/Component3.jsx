// import React from 'react';
// import { FirstName, LastName } from './App';

// const Component3=()=>{

//     return(<><FirstName.Consumer>
//             {(fname)=>{
//                 return(
//                     <LastName.Consumer>
//                         {(lName)=>{
//                             return(<h1>My name is {fname} {lName}</h1>);
//                         }}
//                     </LastName.Consumer>
//                 )
//             }}
//         </FirstName.Consumer></>);
// }

// export default Component3;


// Upper Function can also be performed as:
import React, { useContext } from 'react'
import { FirstName,LastName } from './App'

const Component3=() =>{

    const fName=useContext(FirstName);
    const lName=useContext(LastName);
  return (
    <>
        <h1>{`My name is ${fName} ${lName}`}</h1>
    </>
  )
}

export default Component3;
