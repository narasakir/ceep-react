import React, { Component } from 'react';
import './header.css';
import OpcoesDaPagina from '../OpcoesDaPagina/OpcoesDaPagina';

class Header extends Component{
    render(){
        return(
        <header className="cabecalho container">
            <h1 className="cabecalho-logo">
              Ceep
            </h1>
            <OpcoesDaPagina />
        </header>
        );
    }
}

export default Header;