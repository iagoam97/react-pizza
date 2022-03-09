import React from "react";
import './listaPedidos.css'

import {listSabores} from '../listaSabores/listSabores.js';

function listaPedidos() {

    function SelectSabor(e) {
        const idSelecionaSabor = e.target
        console.log(idSelecionaSabor)
    }

    return (
        <div className="divListaPedidos">
            <div className="listaOpcoes">
                {listSabores.map(function(sabor, index) {
                    return (
                        <div className="infoSaboresPedido" onClick={SelectSabor}>
                            {<img src={sabor.image} alt='Pedidos pizza' className="imagemPedido"/>}
                            <div className="detalhesPedidos">
                                <p className="nomePedidosPizza">{sabor.nome}</p>
                                <p className="descrPedidosPizza">{sabor.ingredientes}</p>
                                <p className="vlrPedidosPizza">{sabor.valor}</p>
                                <button id="">Selecionar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="listaSelecionados">
                <div className="quadroSelecao">
                </div>
                <div className="btnsSelecao">
                    <button id="btnEfetuarPedido">Efetuar Pedido</button>
                    <button id="btnCancelarPedido">Limpar Pedido</button>
                </div>

            </div>
        </div>
    )
}


export default listaPedidos
