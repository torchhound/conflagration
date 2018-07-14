import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';

class CreateThread extends Component {
  onFormSubmit() {
    const file = document.getElementById("file").files[0];
    const storageRef = Firebase.storage().ref();

    const metadata = {
      'contentType': file.type
    };

    storageRef.child('images/' + file.name).put(file, metadata).then(function(reference) {
      reference.ref.getDownloadURL().then(function(url) {
        let post = {body: document.getElementById("comment").value, url: url, id: uuidv4()};
        const thread = {subject: document.getElementById("subject").value, posts: [post], id: uuidv4()};
        const collection = Firebase.firestore().collection('threads');
        collection.add(thread).then(function() {
          window.alert('Successful Thread Post!');
        }).catch(function() {
          window.alert('Failed to post thread...');
        });
      });
    }).catch(function(error) {
      console.error('Upload failed:', error);
    });
  }

  render() {
    return (
      <div className="CreateThread">
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
              <input className="file-input" type="file" name="file" id="file" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose an image…
                </span>
              </span>
              <span className="file-name" value={`
                let file = document.getElementById("file").files[0];
                if (file !== null) {
                  return file.name    
                } else {
                  return "File Name"
                }
                `}/>
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
      </div>
    );
  }
}

export default CreateThread;
