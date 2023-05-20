import React from "react";
import ReactDom from "react-dom";
import './index.css';

const name='Ashish Gulab';
let image1='https://picsum.photos/200/300';
let image2='https://picsum.photos/250/300';
let image3='https://picsum.photos/300/300';

ReactDom.render(<>
  <h1>My name is {name}</h1>
  <div className="images">
    <img src={image1}/>
    <img src={image2}/>
    <img src={image3}/>
  </div>
  </>,
  document.getElementById('root'));