import React from "react";
import ReactDOM from 'react-dom'
import './listaPedidos.css';

import {listSabores} from '../listaSabores/listSabores.js';

function listaPedidos() {

    const arrCarrinho = [];

    function SelectSabor(e) {
        const idSelecionaSabor = e.target.id;
        const getID = idSelecionaSabor.substr(idSelecionaSabor.length - 3);

        const imgPizzaSelecionada = e.target.parentNode.parentNode.firstChild.src
        const nomePizzaSelecionada = e.target.parentNode.childNodes[0].textContent
        const valorPizzaSelecionada = e.target.parentNode.childNodes[2].textContent

        arrCarrinho.push({idCarr: getID, nomeCarr: nomePizzaSelecionada, vlrCarr: valorPizzaSelecionada, imgCarr: imgPizzaSelecionada})

        let getVlrCarrinho = document.getElementById("valorTotalCarrinho").textContent
        let somaVlrCarrinho = parseFloat(getVlrCarrinho) + parseFloat(valorPizzaSelecionada)
        document.getElementById("valorTotalCarrinho").innerHTML=somaVlrCarrinho.toFixed(2);

        const retornoDiv = 
            arrCarrinho.map(function(arrCarrinho, index) {
                return (
                    <div className="pizzaCarrinho" id={index}>
                        <img className="imgPizzaCarrinho" src={arrCarrinho.imgCarr} alt={"Imagem da pizza sabor " + arrCarrinho.nomeCarr}/>
                        <div className="descrPizzaCarrinho">
                            <p>{arrCarrinho.nomeCarr}</p>
                            <p className="formatarDinheiro">{arrCarrinho.vlrCarr}</p>
                        </div>
                    </div>
                )
            })

        ReactDOM.render((
            retornoDiv
        ), document.getElementById('quadroSelecao'));
    }

    return (
        <div className="divListaPedidos">
            <div className="listaOpcoes">
                {listSabores.map(function(sabor, index) {
                    return (
                        <div className="infoSaboresPedido">
                            {<img src={sabor.image} alt='Pedidos pizza' className="imagemPedido"/>}
                            <div className="detalhesPedidos">
                                <p className="nomePedidosPizza">{sabor.nome}</p>
                                <p className="descrPedidosPizza">{sabor.ingredientes}</p>
                                <p className="vlrPedidosPizza formatarDinheiro">{sabor.valor}</p>
                                <button id={"SaborID" + sabor.id} onClick={SelectSabor}>Adicionar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="listaSelecionados">
                <div id="quadroSelecao">
                </div>
                <div>
                    <p id="valorTotalCarrinho" className="formatarDinheiro">0.00</p>
                    <div className="btnsSelecao">
                        <button id="btnEfetuarPedido">Efetuar Pedido</button>
                        <button id="btnCancelarPedido">Limpar Pedido</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default listaPedidos
