import React from "react";
import ReactDom from "react-dom/client";
import './index.css';

const name='Ashish Gulab';
let image1='https://picsum.photos/200/300';
let image2='https://picsum.photos/250/300';
let image3='https://picsum.photos/300/300';

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<>
  <h1>My name is {name}</h1>
  <div className="images">
    <img src={image1} alt="normal_view"/>
    <img src={image2} alt="normal_view"/>
    <img src={image3} alt="normal_view"/>
  </div>
  </>);
