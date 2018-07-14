import React, { Component } from 'react';
import Navbar from './Navbar';

class CreatePost extends Component {
  render() {
    return (
      <div className="CreatePost">
        <h1 className="subtitle">New Post</h1>
        <div className="field">
          <label className="label">Comment</label>
          <div className="control">
            <textarea className="textarea" placeholder="Write your excellent post here..."></textarea>
          </div>
        </div>
        <div className="field">
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" name="resume"/>
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
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

export default CreatePost;
