import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Greet from './components/greet'
import Calc from './components/calc';
import Header from './components/header'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = { myElement: {} };
  }
// here we are passing the value from server side to client side
  componentDidMount() {
    axios.get('http://localhost:3000/admin')
      .then(response => {
        const myElement = response.data;
        this.setState({ myElement });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){


    return (
      <div className="App">
        <Greet />
        
        <Header />

        <p>My element: {this.state.myElement.value}</p><br/><br/>
        <Calc />
      </div>
    );
  }
}

export default App;



