import React, { Component } from 'react';
import './cartao.css';
import OpcoesDoCartao from '../OpcoesDoCartao/OpcoesDoCartao';

class Cartao extends Component {
    render() {
        return (
            <article id="cartao_1" className="cartao">
                <OpcoesDoCartao />
                <p className="cartao-conteudo" contentEditable tabIndex="0">Bem vindo ao Ceep!</p>
            </article>
        );
    }
}

export default Cartao;