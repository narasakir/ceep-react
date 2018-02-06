import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
        <header className="cabecalho container">
            <h1 className="cabecalho-logo">
              Ceep
            </h1>
            <div className="opcoesDaPagina">
              <input type="search" placeholder="busca" id="busca" className="opcoesDaPagina-opcao"/>
              <button id="btnMudaLayout" className="opcoesDaPagina-opcao opcoesDaPagina-botao">
                Linhas
              </button>
              <button id="btnAjuda" className="opcoesDaPagina-opcao opcoesDaPagina-botao">
                ?
              </button>
              <button id="btnSync" className="opcoesDaPagina-opcao opcoesDaPagina-botao botaoSync botaoSync--sincronizado">
    
              </button>
            </div>
        </header>
        );
    }
}

export default Header;