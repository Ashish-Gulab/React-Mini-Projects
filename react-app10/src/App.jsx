// Simple form using multiple states for two input fields of a form
// import React, { useState } from 'react';
// import './index.css';
// const App=()=>{

//     const[name,setName]=useState("");

//     const[fullName,setFullName]=useState("");

//     const[password, setPassword]=useState("");

//     const[newPassword, setNewPassword]=useState("");


//     const inputEvent=(event)=>{
//         setName(event.target.value);
//     }

//     const inputEventNew=(event)=>{
//         setPassword(event.target.value);
//     }

//     const onSubmit=(e)=>{
//         e.preventDefault();
//         setFullName(name);
//         setNewPassword(password);
//     }
    
//     return(<>
//         <form onSubmit={onSubmit}>
//             <div>
//                 <h1>Hello {name} {newPassword}</h1>
//                 <input type="text" placeholder='Enter your name' onChange={inputEvent} value={name}/>

//                 <input type="password" placeholder='Enter your Password' onChange={inputEventNew} value={password} />
//                 <button type='Submit'> Submit</button>
//             </div>
//         </form>
//     </>
//     )
// };

// export default App;



// form using multiple input fields

import React, { useState } from 'react';
import './index.css';

const App=()=>{

    const[fullName,setFullName]=useState({
        fname:'',
        pword:'',
        email:'',
        number:''
    });

    const onSubmit=(event)=>{
        event.preventDefault();
    };
    
    const inputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;

        // object destructuring
        const {value,name}=event.target;

        // setFullName((preValue)=>{
        //     if(name==='fname'){
        //         return{
        //             fname:value,
        //             pword:preValue.pword,
        //             email:preValue.email,
        //             number:preValue.number
        //         };
        //     }
            
        //     else if(name==='pword')
        //     {
        //         return{
        //             fname:preValue.fname,
        //             pword:value,
        //             email:preValue.email,
        //             number:preValue.number
        //         };
        //     }
        //     else if(name==='email')
        //     {
        //         return{
        //             fname:preValue.fname,
        //             pword:preValue.pword,
        //             email:value,
        //             number:preValue.number
        //         }
        //     }
        //     else if(name==='number')
        //     {
        //         return{
        //             fname:preValue.fname,
        //             pword:preValue.pword,
        //             email:preValue.email,
        //             number:value
        //         }
        //     }
        // });

        // We can also Use the spread operator to remove these conditions. Spread operator is used take all the values of one array into other array
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        });
    };
    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello {fullName.fname} {fullName.pword}</h1>
                    <h3>{fullName.email}</h3>
                    <p>{fullName.number}</p>
                    <input type="text" name='fname' placeholder='Enter your Name' onChange={inputEvent} value={fullName.fname} autoComplete='off'/>

                    <input type="password" name='pword'placeholder='Enter the password' onChange={inputEvent} value={fullName.pword} autoComplete="off" />

                    <input type="email" placeholder='Enter the Email' onChange={inputEvent} name='email' value={fullName.email} autoComplete='off'/>

                    <input type="number" placeholder='Enter your Phone Number' onChange={inputEvent} name='number' value={fullName.number} autoComplete='off' />

                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    );
};

export default App;