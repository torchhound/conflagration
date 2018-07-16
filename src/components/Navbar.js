import React, { Component } from 'react';
import { Boards } from '../models/boards';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li><a href="/">home</a></li>
              {Boards.map((board, x) => {
                return (<li key={x}><a href={`/catalog/${board}`}>{board}</a></li>)
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;