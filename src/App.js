import React, { Component } from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './css/container.css';
import './css/opcoesDaPagina.css';
import './css/opcoesDoCartao.css';
import './css/botaoSync.css';
import './css/mural.css';
import './css/cabecalho.css';
import './css/cartao.css';
import './css/formNovoCartao.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
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

      <form className="formNovoCartao container">
        <textarea className="formNovoCartao-conteudo" name="formNovoCartao-conteudo" placeholder="Digite aqui"></textarea>
        <input className="formNovoCartao-salvar" type="submit" value="Salvar"/>
      </form>

      <section className="container mural" >
  
        <article id="cartao_1" className="cartao">
          <div className="opcoesDoCartao">
            <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
              
            </button>

            <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" className="opcoesDoCartao-radioTipo" checked/>
            <label for="corPadrão-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Padrão
            </label>

            <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" className="opcoesDoCartao-radioTipo"/>
            <label for="corImportante-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Importante
            </label>

            <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" className="opcoesDoCartao-radioTipo"/>
            <label for="corTarefa-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabindex="0">
              Tarefa
            </label>

            <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" className="opcoesDoCartao-radioTipo"/>
            <label for="corInspiração-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Inspiração
            </label>
          </div>
          <p className="cartao-conteudo" contenteditable tabindex="0">Bem vindo ao Ceep!</p>
        </article>
        <article id="cartao_2" className="cartao">
          <div className="opcoesDoCartao">
            <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
              
            </button>

            <input type="radio" name="corDoCartao2" value="#EBEF40" id="corPadrão-cartao2" className="opcoesDoCartao-radioTipo" checked/>
            <label for="corPadrão-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Padrão
            </label>

            <input type="radio" name="corDoCartao2" value="#F05450" id="corImportante-cartao2" className="opcoesDoCartao-radioTipo"/>
            <label for="corImportante-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Importante
            </label>

            <input type="radio" name="corDoCartao2" value="#92C4EC" id="corTarefa-cartao2" className="opcoesDoCartao-radioTipo"/>
            <label for="corTarefa-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabindex="0">
              Tarefa
            </label>

            <input type="radio" name="corDoCartao2" value="#76EF40" id="corInspiração-cartao2" className="opcoesDoCartao-radioTipo"/>
            <label for="corInspiração-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Inspiração
            </label>
          </div>
          <p className="cartao-conteudo" contenteditable tabindex="0">o site é otimizado para celulares!</p>
        </article>
        <article id="cartao_3" className="cartao">
          <div className="opcoesDoCartao">
            <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
              
            </button>

            <input type="radio" name="corDoCartao3" value="#EBEF40" id="corPadrão-cartao3" className="opcoesDoCartao-radioTipo" checked/>
            <label for="corPadrão-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Padrão
            </label>

            <input type="radio" name="corDoCartao3" value="#F05450" id="corImportante-cartao3" className="opcoesDoCartao-radioTipo"/>
            <label for="corImportante-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Importante
            </label>

            <input type="radio" name="corDoCartao3" value="#92C4EC" id="corTarefa-cartao3" className="opcoesDoCartao-radioTipo"/>
            <label for="corTarefa-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabindex="0">
              Tarefa
            </label>

            <input type="radio" name="corDoCartao3" value="#76EF40" id="corInspiração-cartao3" className="opcoesDoCartao-radioTipo"/>
            <label for="corInspiração-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabindex="0">
              Inspiração
            </label>
          </div>
          <p className="cartao-conteudo" contenteditable tabindex="0">Para mudar o layout, clique no botão linha do cabeçalho</p>
        </article>

      </section>
    </div>
    );
  }
}

export default App;
