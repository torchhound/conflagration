import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" class="hero is-dark is-fullheight">
        <header class="container">
          <h1>Conflagration 0.x</h1>
        </header>
        <p class="container">
          Imageboard in progress <br/>
          <a href="/catalog">Test Board</a>
        </p>
      </div>
    );
  }
}

export default App;
