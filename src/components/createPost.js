import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import { connect } from "react-redux";
import { setThreadFileNameState, postReplySuccess } from '../actions/threadActions';

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
      collection.add(post).then(() => {
        props.dispatchReplySuccess(true);
      }).catch(() => {
        props.dispatchReplySuccess(false);
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
      }).catch(error => {
        this.props.dispatchReplySuccess(false);
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
    const { replySuccess } = this.props;
    let replyDiv = '';

    if (replySuccess === null) {
      replyDiv = '';
    }
    else if (replySuccess) {
        replyDiv = <div id="successDiv" className="notification is-success"><button className="delete"/>Successful Reply!</div>
    } else {
      replyDiv = <div id="failureDiv" className="notification is-danger"><button className="delete"/>Failed to post reply...</div>
    }

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
        {replyDiv}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFileName: fileName => {
      dispatch(setThreadFileNameState(fileName));
    },
    dispatchReplySuccess: bool => {
      dispatch(postReplySuccess(bool));
    }
  }
}

const mapStateToProps = state => {
  return { thread: state.thread.name,
    fileName: state.thread.fileName,
    replySuccess: state.thread.replySuccess 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
