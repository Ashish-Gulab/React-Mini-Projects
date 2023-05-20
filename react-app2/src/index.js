import React from 'react';
import ReactDom from 'react-dom';

const name='Ashish Gulab';
let date=new Date().toLocaleDateString();
let time=new Date().toLocaleTimeString();

ReactDom.render(<>
  <h1>My name is {name}</h1>
  <p>Today's Date is {date}</p>
  <p>Current time is {time}</p>
  </>,
  document.getElementById('root'));