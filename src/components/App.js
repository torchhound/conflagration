import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Conflagration 0.x
              </h1>
              <h2 className="subtitle">
                Imageboard in Progress
              </h2>
            </div>
          </div>
          <div className="hero-foot">
            <Navbar/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
