import React, {Component} from 'react';
import './mural.css';
import Cartao from '../Cartao/Cartao'

class Mural extends Component{
    render(){
        return(
          <section className="container mural" >
            <Cartao />  
            <Cartao />  
            <Cartao />  
            <Cartao />  
            <Cartao />  
          </section>
        );
    }
}
export default Mural;