import React, { Component } from 'react';
import Navbar from './Navbar';

class CreateBoard extends Component {
  render() {
    return (
      <div className="CreateBoard">
        <h1 className="subtitle">New Board</h1>
        <div className="field">
          <label className="label">Board Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Make it a banger..."/>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBoard;
