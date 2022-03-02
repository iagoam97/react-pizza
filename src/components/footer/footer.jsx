import React from "react";
import './footer.css';

function rodape() {
        return (
            <div id="divFooter">
                <div className="divFooterSobre">
                    <h3>
                        Sobre
                    </h3>
                    <p>
                        Site feito por Iago Arendt Mothé
                    </p>
                    <p>
                        O intuito deste site é treinar minhas habilidades em Front End utilizando React e utilizar como portfolio para conseguir um emprego :)
                    </p>
                </div>
                <div className="divFooterContato">
                    <h3>
                        Contato
                    </h3>
                    <p>
                        Meu github é: <a href="https://github.com/iagoam97" target="_blank" rel="noopener noreferrer" title="Ao clicar neste link será aberta uma nova janela!">https://github.com/iagoam97</a>
                    </p>
                    <p>
                        Me manda um Whats: <a href="https://wa.me/5517991742110" target="_blank" rel="noopener noreferrer" title="Ao clicar neste link será aberta uma nova janela!">(17) 99174-2110</a>
                    </p>
                    <p>
                        Meu e-mail é: <a href="mailto:mothearendtiago@gmail.com" target="_blank" rel="noopener noreferrer" title="Ao clicar neste link será aberta uma nova janela!">mothearendtiago@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    };

export default rodape