import React from "react";

import CardSobre from './Cards/cardSobre.jsx';
import CardSabores from './Cards/cardSabores.jsx';
import {listSabores} from '../listaSabores/listSabores';


function cardsHome() {
    return (
        <div>
            <CardSobre/>
            <CardSabores slides={listSabores} />
        </div>
    );
};


export default cardsHome;

