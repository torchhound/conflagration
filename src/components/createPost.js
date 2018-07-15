import React, { Component } from 'react';
import Firebase from 'firebase';
import uuidv4 from 'uuid/v4';

class CreatePost extends Component {
    onFormSubmit() {
    const file = document.getElementById("file").files[0];

    function submitDocument(url) {
      const post = {body: document.getElementById("comment").value, url: url, id: uuidv4()};
      const collection = Firebase.firestore().collection('posts');
      collection.add(post).then(function() {
        window.alert('Successful Reply!');
      }).catch(function() {
        window.alert('Failed to post reply...');
      });
    }

    if (file !== undefined) {
      const storageRef = Firebase.storage().ref();

      const metadata = {
        'contentType': file.type
      };
      storageRef.child('images/' + file.name).put(file, metadata).then(function(reference) {
        reference.ref.getDownloadURL().then(function(url) {
          submitDocument(url);
        });
      }).catch(function(error) {
        console.error('Upload failed:', error);
      });
    } else {
      submitDocument('');
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
              <input className="file-input" type="file" name="file" id="file" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                Image File Name
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
      </div>
    );
  }
}

export default CreatePost;
