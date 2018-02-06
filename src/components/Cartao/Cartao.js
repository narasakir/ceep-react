import React, { Component } from 'react';
import './cartao.css';

class Cartao extends Component {
    render() {
        return (
            <article id="cartao_1" className="cartao">
                <div className="opcoesDoCartao">
                    <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabIndex="0">X</button>

                    <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" className="opcoesDoCartao-radioTipo" checked />
                    <label htmlFor="corPadrão-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">Padrão</label>

                    <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" className="opcoesDoCartao-radioTipo" />
                    <label htmlFor="corImportante-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">Importante</label>

                    <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" className="opcoesDoCartao-radioTipo" />
                    <label htmlFor="corTarefa-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">Tarefa</label>

                    <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" className="opcoesDoCartao-radioTipo" />
                    <label htmlFor="corInspiração-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">Inspiração</label>
                </div>
                <p className="cartao-conteudo" contentEditable tabIndex="0">Bem vindo ao Ceep!</p>
            </article>
        );
    }
}

export default Cartao;