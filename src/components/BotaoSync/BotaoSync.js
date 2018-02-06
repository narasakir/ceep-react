import React, {Component} from 'react';
import './botaoSync.css';

class BotaoSync extends Component{
    render(){
        return(
            <button id="btnSync" className="opcoesDaPagina-opcao opcoesDaPagina-botao botaoSync botaoSync--sincronizado">S</button>
        );
    }
}
export default BotaoSync;