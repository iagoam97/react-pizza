import React from "react";
import './navBar.css';
import logo from '../../assets/logo/logoPizza.png';
//import logo from 'C:/Users/Iago/Desktop/progs/LOGOS/pizza2.png';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import CardHome from '../cardsHome/cardHome.jsx';
import ListaSabores from '../listaSabores/listaSabores.jsx';

function navegacao() {
        return (
            <Router>
                <div id="divNav">
                    <div className="logoNav">
                        <figure>
                            <img src={logo} alt="logoPizzaria"/>
                            <figcaption>Logo da pizzaria</figcaption>
                        </figure>
                    </div>
                    <div id="navOptions">
                        <Link as={Link} to={"/"}>Inicio</Link>
                        <Link as={Link} to={"/cardapio"}>Cardápio</Link>
                        <Link as={Link} to={"/pedidos"}>Peça Aqui :)</Link>
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path="/" exact element={<CardHome/>}/>
                        <Route exact path="/cardapio" element={<ListaSabores/>}/>
                    </Routes>
                </div>
            </Router>
        );
    };

export default navegacao