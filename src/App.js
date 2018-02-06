import React, { Component } from 'react';
import './css/reset.css';
import './css/container.css';
import './css/botaoSync.css';
import './App.css';
import Header from './components/Header/Header';
import Mural from './components/Mural/Mural';
import FormNovoCartao from './components/FormNovoCartao/FormNovoCartao';


class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header /> 

        <FormNovoCartao />

        <Mural />
    </div>
    );
  }
}

export default App;
