import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component{
  render(){
    return <button>{this.props.label} </button>
  }
}
class MyLabel extends Component{
  render(){
    return <p>{this.props.text}</p>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLabel text="Escrevendo pelo App"/>
        <MyButton label="Botão 1"/>
        <MyButton label="Botão 2"/>
        <MyButton label="Botão 3"/>
      </div>
    );
  }
}

export default App;
