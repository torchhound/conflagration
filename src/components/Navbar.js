import React, { Component } from 'react';
import { Boards } from '../models/boards';
import { setBoardState } from '../actions/boardActions';
import { connect } from 'react-redux';

class Navbar extends Component {
  onBoardClick(board) {
    this.props.dispatchBoardClick(board);
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li><a href="/">home</a></li>
              {Boards.map((board, x) => {
                return (<li key={x}><a href={`/catalog/${board}`} onClick={() => this.onBoardClick({board})}>{board}</a></li>)
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchBoardClick: board => {
      dispatch(setBoardState(board));
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar);