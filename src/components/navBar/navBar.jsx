import React from "react";
import './navBar.css';
import logo from '../../assets/logo/logoPizza.png';
//import logo from 'C:/Users/Iago/Desktop/progs/LOGOS/pizza2.png';

function navegacao() {
        return (
            <div id="divNav">
                <div className="logoNav">
                    <figure>
                        <img src={logo} alt="logoPizzaria"/>
                        <figcaption>Logo da pizzaria</figcaption>
                    </figure>
                </div>
                <div id="navOptions">
                    <p>Inicio</p>
                    <p>Cardápio</p>
                    <p>Peça Aqui :)</p>
                </div>
            </div>
        );
    };

export default navegacao