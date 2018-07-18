import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import { connect } from "react-redux";
import { setThreadFileNameState } from '../actions/threadActions';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }

  onFormSubmit() {
    const file = document.getElementById("file").files[0];

    function submitDocument(url, props) {
      const timestamp = Firebase.firestore.FieldValue.serverTimestamp();
      const post = {body: document.getElementById("comment").value, url: url, id: uuidv4(), 
        thread: props.thread, timestamp: timestamp};
      const collection = Firebase.firestore().collection('posts');
      collection.add(post).then(function() {
        window.alert('');
      }).catch(function() {
        window.alert('');
      });
    }

    if (file !== undefined) {
      const storageRef = Firebase.storage().ref();

      const metadata = {
        'contentType': file.type
      };
      storageRef.child('images/' + file.name).put(file, metadata).then(reference => {
        reference.ref.getDownloadURL().then(url => {
          submitDocument(url, this.props);
        });
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });
    } else {
      submitDocument('', this.props);
    }
  }

  onFileNameChange() {
    if (document.getElementById("file").files[0] !== undefined) {
      const fileName = document.getElementById("file").files[0].name;
      this.props.dispatchFileName(fileName);
    }
  }

  render() {
    return (
      <div className="CreatePost" style={{marginBottom: 5}}>
        <h1 className="subtitle">New Post</h1>
        <div className="field">
          <label className="label">Comment</label>
          <div className="control">
            <textarea className="textarea" id="comment" placeholder="Write your excellent post here..."></textarea>
          </div>
        </div>
        <div className="field">
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" onChange={this.onFileNameChange.bind(this)} name="file" id="file" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                {this.props.fileName}
              </span>
            </label>
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
        <div id="successDiv" className="notification is-success">
  <button className="delete"/>Successful Reply!</div>
        <div id="failureDiv" className="notification is-danger"><button className="delete"/>Failed to post reply...</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFileName: fileName => {
      dispatch(setThreadFileNameState(fileName));
    }
  }
}

const mapStateToProps = state => {
  return { thread: state.thread.name,
    fileName: state.thread.fileName 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
