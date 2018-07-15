import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';

class CreateBoard extends Component {
  onFormSubmit() {
    const board = {name: document.getElementById("name").value, id: uuidv4()};
    const collection = Firebase.firestore().collection('boards');
    collection.add(board).then(function() {
      window.alert('Successful Board Creation!');
    }).catch(function() {
      window.alert('Failed to create board...');
    });
  }

  render() {
    return (
      <div className="CreateBoard" style={{marginBottom: 5}}>
        <h1 className="subtitle">New Board</h1>
        <div className="field">
          <label className="label">Board Name</label>
          <div className="control">
            <input className="input" type="text" id="name" placeholder="Make it a banger..."/>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.onFormSubmit}>Submit</button>
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
