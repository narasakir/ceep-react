import React, { Component } from 'react';
import './opcoesDaPagina.css';

class OpcoesDaPagina extends Component{
    render(){
        return(
            
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
        );
    }
}

export default OpcoesDaPagina;