import React from "react";
import ReactDom from "react-dom";
import './reset.css';
import './index.css';
import NavBar from './components/navBar/navBar.jsx'
import Footer from './components/footer/footer.jsx'


import CardSobre from './components/cardsHome/cardSobre.jsx'
import CardSabores from './components/cardsHome/cardSabores.jsx'
import {listSabores} from './components/cardsHome/listSabores';

import reportWebVitals from './reportWebVitals';

ReactDom.render(
    <div id='box'>
        <NavBar/>
        <CardSobre/>
        <CardSabores slides={listSabores} />
        <Footer/>
    </div>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

