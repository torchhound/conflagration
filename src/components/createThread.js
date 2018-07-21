import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import { connect } from "react-redux";
import { setBoardFileNameState, postThreadSuccess } from '../actions/boardActions';

class CreateThread extends Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);  
    this.onDelete = this.onDelete.bind(this);
  }

  onFormSubmit() {
    const file = document.getElementById("file").files[0];

    function submitDocument(url, props) {
      const threadId = uuidv4();
      const timestamp = Firebase.firestore.FieldValue.serverTimestamp();
      const post = {body: document.getElementById("comment").value, url: url, id: uuidv4(), 
        thread: threadId, timestamp: timestamp};
      const thread = {subject: document.getElementById("subject").value, first: post, 
        id: threadId, board: props.board, timestamp: timestamp};
      const threadCollection = Firebase.firestore().collection('threads');
      const postCollection = Firebase.firestore().collection('posts');
      postCollection.add(post).then(() => {
        threadCollection.add(thread).then(() => {
          props.dispatchThreadSuccess(true);
        }).catch(() => {
          props.dispatchThreadSuccess(false);
        });
      }).catch(() => {
        props.dispatchThreadSuccess(false);
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
        this.props.dispatchThreadSuccess(false);
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

  onDelete() {
    this.props.dispatchThreadSuccess(null);
  }

  render() {
    const { replySuccess } = this.props;
    let replyDiv = '';

    if (replySuccess === null) {
      replyDiv = '';
    }
    else if (replySuccess) {
        replyDiv = <div id="successDiv" className="notification is-success"><button className="delete" onClick={this.onDelete}/>Thread Posted!</div>
    } else {
      replyDiv = <div id="failureDiv" className="notification is-danger"><button className="delete" onClick={this.onDelete}/>Failed to post thread...</div>
    }

    return (
      <div className="CreateThread" style={{marginBottom: 5}}>
        <h1 className="subtitle">New Post</h1>
        <div className="field">
          <label className="label">Thread Subject</label>
          <div className="control">
            <input className="input" id="subject" type="text" placeholder="Don't bomb..."/>
          </div>
        </div>
        <div className="field">
          <label className="label">Comment</label>
          <div className="control">
            <textarea className="textarea" placeholder="Write your excellent post here..." id="comment"></textarea>
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
                  Choose an image…
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
      dispatch(setBoardFileNameState(fileName));
    },
    dispatchThreadSuccess: bool => {
      dispatch(postThreadSuccess(bool));
    }
  }
}

const mapStateToProps = state => {
  return { 
    board: state.board.name,
    fileName: state.board.fileName,
    replySuccess: state.board.replySuccess 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateThread);
