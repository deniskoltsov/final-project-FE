import React, { Component } from 'react';
import Images from './Images.js';
import Main from './Main.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React</h2>
          <Main />
          <Images />
      </div>
    );
  }
}

export default App;
