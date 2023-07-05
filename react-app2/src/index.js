import React from 'react';
import ReactDom from 'react-dom/client';

const name='Ashish Gulab';
let date=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>My name is {name}</h1>
    <p>Today's Date is {date}</p>
    <p>Current time is {time}</p>
  </>);
