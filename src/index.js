import React from "react";
import ReactDom from "react-dom";
import './reset.css';
import './index.css';
import NavBar from './components/navBar/navBar.jsx'
import CardSabores from './components/cardsHome/cardSabores.jsx'

import reportWebVitals from './reportWebVitals';

ReactDom.render(
    <div id='box'>
        <NavBar/>
        <CardSabores/>
        <h1>Teste Teste</h1>
    </div>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

