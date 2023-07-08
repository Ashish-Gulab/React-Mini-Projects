import React, {  useState , useEffect} from 'react';

const App=()=>{

    const[num,setNum]=useState(0);
    const[nums,setNums]=useState(0);
    const[numss,setNumss]=useState(0);

    useEffect(()=>{
        alert("You increase the value of button");
        document.title=`You Clicked ${num} times`;
    },[num,nums]);

    return(<><h1>Concept of useEffect</h1>
            <p>useEffect is use to show something during rendering of the component. And the render function active when there would be any change in the component</p>

            <button onClick={()=>{setNum(num+1)}}>Increase Value by one {num}</button><br /><br />
            <button onClick={()=>{setNums(nums+2)}}>Increase Value by two {nums}</button><br /><br />
            <button onClick={()=>{setNumss(numss+3)}}>Increase Value by three {numss}</button>
        </>);
}

export default App;