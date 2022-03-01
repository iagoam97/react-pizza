import React from "react";
import './cardsCSS.css';
import logo from '../../assets/sabores/pizzaPeperoni.jpg';

function cardSobre() {
        return (
            <div className="divCardSobre">
                <div className="fotoPizza">
                    <figure>
                        <img src={logo} alt="Pizza-de-queijo"/>
                        <figcaption>Pizza de queijo na apresentação</figcaption>
                    </figure>
                </div>
                <div className="textoSobre">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus elit ut imperdiet tincidunt. Phasellus dignissim purus orci, quis lacinia velit ullamcorper non. Donec vel libero eu est faucibus posuere nec laoreet turpis. </p>
                </div>
            </div>
        );
    };

export default cardSobre