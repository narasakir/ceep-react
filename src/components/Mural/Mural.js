import React, {Component} from 'react';
import './mural.css';

class Mural extends Component{
    render(){
        return(
            <section className="container mural" >
  
            <article id="cartao_1" className="cartao">
              <div className="opcoesDoCartao">
                <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabIndex="0">
                  
                </button>
    
                <input type="radio" name="corDoCartao1" value="#EBEF40" id="corPadrão-cartao1" className="opcoesDoCartao-radioTipo" checked/>
                <label htmlFor="corPadrão-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Padrão
                </label>
    
                <input type="radio" name="corDoCartao1" value="#F05450" id="corImportante-cartao1" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corImportante-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Importante
                </label>
    
                <input type="radio" name="corDoCartao1" value="#92C4EC" id="corTarefa-cartao1" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corTarefa-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">
                  Tarefa
                </label>
    
                <input type="radio" name="corDoCartao1" value="#76EF40" id="corInspiração-cartao1" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corInspiração-cartao1" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Inspiração
                </label>
              </div>
              <p className="cartao-conteudo" contentEditable tabIndex="0">Bem vindo ao Ceep!</p>
            </article>
            <article id="cartao_2" className="cartao">
              <div className="opcoesDoCartao">
                <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabIndex="0">
                  
                </button>
    
                <input type="radio" name="corDoCartao2" value="#EBEF40" id="corPadrão-cartao2" className="opcoesDoCartao-radioTipo" checked/>
                <label htmlFor="corPadrão-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Padrão
                </label>
    
                <input type="radio" name="corDoCartao2" value="#F05450" id="corImportante-cartao2" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corImportante-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Importante
                </label>
    
                <input type="radio" name="corDoCartao2" value="#92C4EC" id="corTarefa-cartao2" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corTarefa-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">
                  Tarefa
                </label>
    
                <input type="radio" name="corDoCartao2" value="#76EF40" id="corInspiração-cartao2" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corInspiração-cartao2" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Inspiração
                </label>
              </div>
              <p className="cartao-conteudo" contentEditable tabIndex="0">o site é otimizado para celulares!</p>
            </article>
            <article id="cartao_3" className="cartao">
              <div className="opcoesDoCartao">
                <button className="opcoesDoCartao-remove opcoesDoCartao-opcao" tabIndex="0">
                  
                </button>
    
                <input type="radio" name="corDoCartao3" value="#EBEF40" id="corPadrão-cartao3" className="opcoesDoCartao-radioTipo" checked/>
                <label htmlFor="corPadrão-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Padrão
                </label>
    
                <input type="radio" name="corDoCartao3" value="#F05450" id="corImportante-cartao3" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corImportante-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Importante
                </label>
    
                <input type="radio" name="corDoCartao3" value="#92C4EC" id="corTarefa-cartao3" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corTarefa-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao" tabIndex="0">
                  Tarefa
                </label>
    
                <input type="radio" name="corDoCartao3" value="#76EF40" id="corInspiração-cartao3" className="opcoesDoCartao-radioTipo"/>
                <label htmlFor="corInspiração-cartao3" className="opcoesDoCartao-tipo opcoesDoCartao-opcao"  tabIndex="0">
                  Inspiração
                </label>
              </div>
              <p className="cartao-conteudo" contentEditable tabIndex="0">Para mudar o layout, clique no botão linha do cabeçalho</p>
            </article>
    
          </section>
        );
    }
}
export default Mural;