import React from "react";
import './listaSabores.css'


import {listSabores} from './listSabores';

function listaCompletaSabores() {
    return (
        <div className="divListaSabores">
            <div>
                {listSabores.map(function(sabor, index) {
                    return (
                        <div className="infoSabor">
                            {<img src={sabor.image} alt='sabores pizza' className="imagemSabor"/>}
                            <div className="detalhesSabor">
                                <p className="nomeSaborPizza">{sabor.nome}</p>
                                <p className="descrSaborPizza">{sabor.ingredientes}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default listaCompletaSabores
