import React, { Component } from 'react';
import Navbar from './Navbar';
import CreatePost from './createPost';
import { setThreadState } from '../actions/threadActions';
import { connect } from 'react-redux';

class Thread extends Component {
  componentDidMount() {
    this.props.dispatchThread(this.props.match.params.thread);
  }

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
        </div>
        <footer className="footer">
            <Navbar/>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchThread: thread => {
      dispatch(setThreadState(thread));
    }
  }
}

export default connect(null, mapDispatchToProps)(Thread);
