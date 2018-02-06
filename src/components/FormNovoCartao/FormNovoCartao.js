import React, { Component } from 'react';
import './formNovoCartao.css';

class FormNovoCartao extends Component {
    render() {
        return (
            <form className="formNovoCartao container">
                <textarea className="formNovoCartao-conteudo" name="formNovoCartao-conteudo" placeholder="Digite aqui"></textarea>
                <input className="formNovoCartao-salvar" type="submit" value="Salvar" />
            </form>
        );
    }
}
export default FormNovoCartao;