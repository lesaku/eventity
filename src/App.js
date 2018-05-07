import React, { Component } from 'react';
import Body from './container/Body/Body';
import Navbar from './container/Header/Header'
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        <Body/>
      </div>
    );
  }
}

export default App;