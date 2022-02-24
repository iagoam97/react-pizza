import React from "react";
import './cardsCSS.css';
import logo from '../../assets/logo/logoPizza.png';

function cardSabores() {
        return (
            <div className="divCardSobre">
                <div className="fotoPizza">
                    <figure>
                        <img src={logo} alt="Pizza-de-queijo"/>
                        <figcaption>Pizza de queijo na apresentação</figcaption>
                    </figure>
                </div>
                <div className="textoSobre">
                    <p>Nada mais chato que ficar esperando o seu sabor preferido chegar na mesa? Aqui você escolhe o que vem para a mesa são mais de 29 sabores de deliciosas pizzas brotinhos para você saborear sem limites!! O Festival da Pizza te oferece além disso, acompanhamentos com batata frita e pasteizinhos! 😋</p>
                </div>
            </div>
        );
    };

export default cardSabores