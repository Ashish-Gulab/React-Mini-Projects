import React from 'react';
import add,{sub,multiply,divide} from './Calculator';
function App(){
    return(
        <>
        <h1> Simple Calculator</h1>
            <ol>
                <li>Sum of two Numbers is {add(2,3)}</li>
                <li>Difference of two numbers is {sub(3,2)}</li>
                <li>Multiplication of two numbers is {multiply(2,3)}</li>
                <li>Division of two numbers is {divide(40,3)}</li>
            </ol>
        </>
    )
}

export default App;