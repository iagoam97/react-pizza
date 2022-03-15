import React, { useState} from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
//import ReactDOM from 'react-dom'
import './modalPagamento.css'

    const modalPagamento = props => {
        
        
        const [paidFor, setPaidFor] = useState(false);
        const [error, setError] = useState(null);

        const handleApprove = (orderID) => {
            setPaidFor(true)
        };

        if (paidFor) {
            console.log("Sucesso");
            alert("Obrigado por comprar conosco!");
        }

        if (error) {
            console.log("Error");
            alert(error);
        }
        return (
            <PayPalButtons
                onClick={(data, actions) => {
                    return actions.resolve()
                }}
                createOrder={(data, actions) =>{
                    const vlrTotal = document.getElementById("valorTotalCarrinho").innerHTML
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Pizza",
                                amount: {
                                    currency_code: "BRL",
                                    value: vlrTotal
                                }
                            }
                        ]
                    });
                }}
                onCancel={() => {

                }}
                onApprove={async(data, actions) => {
                    const order = await actions.order.capture();
                    console.log("order", order);

                    handleApprove(order.orderID);
                }}
                onError={(err) => {
                    setError(err);
                    console.log(err)
                }}
            />
        );
    }

export default modalPagamento
