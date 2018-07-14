import React, { Component } from 'react';
import Navbar from './Navbar';
import CreateThread from './createThread';

class Catalog extends Component {
  render() {
    return (
      <div className="Catalog">
        <header>
          <h1 className="title">Catalog</h1>
          <CreateThread/>
        </header>
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
            </div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">
              <figure className="image is-128x128">
                <img src=""/>
              </figure>
              <a href="/thread">Lorem Ipsum</a>
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

export default Catalog;
