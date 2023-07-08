import React, { createContext } from 'react';
import Component1 from './Component1';

// createContext is used to provide the props to the child component without provide to intermediate component 
const FirstName=createContext();
const LastName=createContext();

const App=()=>{

    return(<>
        <FirstName.Provider value={"Ashish"}>
            <LastName.Provider value={"Gulab"}>
                <Component1/>
            </LastName.Provider>
        </FirstName.Provider>
    </>);
}

export default App;
export {FirstName,LastName};