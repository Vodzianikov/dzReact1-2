import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';
import styled from "styled-components"

const root = ReactDOM.createRoot(document.getElementById('root'));

// const {Wrapper}={
//   Wrapper:styled.div`
//   background: rgb(238,174,202);
//   background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
// `,

// }


 //Реакст упрощает писание текста
 //разница:
// const element = <h1>Hello world</h1> 

// const element2 = React.createElement('h1',null,'Hello world')

// console.log(element)
// console.log(element2)
//////////////////////////////////



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
