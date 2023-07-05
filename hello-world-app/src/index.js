// This is the older format of writing the javascript
// var React=require('react');
// var ReactDom=require('react-dom');

// Now we use the Bable that is import when we import the 'react'.
// Babel is the compiler that convert the modern javascript according to the brower running javascript. So we will prefer the 'import' method to import the react etc.
import React from 'react';
import ReactDom from 'react-dom/client';

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<h1>Hello World !!!</h1>);
