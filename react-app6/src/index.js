import React from 'react';
import ReactDom from 'react-dom/client';
import Heading from './Components/Heading';
import Movies from './Components/Movies';

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<><Heading/><Movies/></>);
