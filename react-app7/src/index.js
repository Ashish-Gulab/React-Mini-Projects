import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import Card from './Card';
import Data from './Data'
// import img from './image/Portfolio Image5.jpg'
// Use img as {img} in src then it will give proper result

// const container=document.getElementById('root');
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='heading_style'> Top NetFlix Series</h1>
  <Card sname={Data[0].sname}  imgsrc={Data[0].imgsrc}  title={Data[0].title} link={Data[0].links}/>
  
  <Card sname={Data[1].sname}  imgsrc={Data[1].imgsrc}  title={Data[1].title} link={Data[1].links}/>
  
  <Card sname={Data[2].sname}  imgsrc={Data[2].imgsrc}  title={Data[2].title} link={Data[2].links}/>
  
  <Card sname={Data[3].sname}  imgsrc={Data[3].imgsrc}  title={Data[3].title} link={Data[3].links}/>
  
  <Card sname={Data[4].sname}  imgsrc={Data[4].imgsrc}  title={Data[4].title} link={Data[4].links}/>

  </>
);


