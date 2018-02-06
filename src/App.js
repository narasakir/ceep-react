import React, { Component } from 'react';
import './css/reset.css';
import './css/container.css';
import './css/opcoesDaPagina.css';
import './css/opcoesDoCartao.css';
import './css/botaoSync.css';
import './css/cartao.css';
import './css/formNovoCartao.css';
import './App.css';
import Header from './components/Header/Header';
import Mural from './components/Mural/Mural';


class App extends Component {
  render() {
    return (
      <div id="layout">
        
      <Header /> 

      <form className="formNovoCartao container">
        <textarea className="formNovoCartao-conteudo" name="formNovoCartao-conteudo" placeholder="Digite aqui"></textarea>
        <input className="formNovoCartao-salvar" type="submit" value="Salvar"/>
      </form>

      <Mural />
    </div>
    );
  }
}

export default App;
