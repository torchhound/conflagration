import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/catalog">Test Board</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;