import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// let time=new Date(2023,5,20,20).getHours();
let time=new Date().getHours();
let wish='';
let changecolor={};
if(time>=1 && time<12)
{
  wish='Good Morning';
  changecolor.color='green';
}
else if(time>=12 && time<=7)
{
  wish='Goode AfterNoon';
  changecolor.color='red';
}
else
{
  wish='GoodNight';
  changecolor.color='orange';
}
ReactDom.render(<div><h1>Hello Sir,<span style={changecolor}>{wish}</span></h1></div>, document.getElementById('root'));