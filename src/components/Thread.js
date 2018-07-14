import React, { Component } from 'react';
import Navbar from './Navbar';
import CreatePost from './createPost';

class Thread extends Component {
  render() {
    return (
      <div className="Thread">
        <header>
          <h1 className="title">Thread</h1>
          <CreatePost/>
        </header>
        <div className="columns is-multiline">
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="column is-full">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <footer className="footer">
            <Navbar/>
        </footer>
      </div>
    );
  }
}

export default Thread;
