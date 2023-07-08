import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App=()=>{

    const[num,setNum]=useState(0);
    const[name,setName]=useState();
    const[moves,setMoves]=useState();

    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setMoves(res.data.moves.length);
            setName(res.data.name);
        }
        getData();
    });

    return (
    <>
        <h1>Pokemon API</h1>

        <h2>You Choose <span style={{color:"red"}}>{num} value</span></h2>
        <h2>My name is <span style={{color:"green"}}>{name}</span></h2>
        <h2>I have <span style={{color:"orange"}}>{moves} moves</span></h2>
        {/* <p>You selected {num}</p> */}

        <select value={num} onChange={(event)=>{
            setNum(event.target.value);
        }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
        </select>
    </>
    );
};

export default App;