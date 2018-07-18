import React, { Component } from 'react';
import Navbar from './Navbar';
import CreatePost from './createPost';
import { setThreadState, fetchPosts } from '../actions/threadActions';
import { connect } from 'react-redux';

class Thread extends Component {
  componentDidMount() {
    const thread = this.props.match.params.thread;
    this.props.dispatchThread(thread);
    this.props.dispatchFetchPosts(thread);
  }

  render() {
    const { error, loading, posts } = this.props;

    let alertDiv = '';

    if (error) {
      alertDiv = <div className="notification is-danger">Error: {error}</div>
    }   

    if (loading) {
      alertDiv = <div className="notification is-primary is-loading">Loading...</div>
    } 

    return (
      <div className="Thread">
        <header>
          <h1 className="title">Thread</h1>
          <CreatePost/>
        </header>
        {alertDiv}
        <div className="columns is-multiline">
          {
            posts.map((post, x)=> {
              return (
                <div key={x} className="column is-full">
                  <div className="box">
                    <figure className="image is-128x128">
                      <img src={post.url}/>
                    </figure>
                    <b>ID: {post.id}</b> <br/>
                    <b>Posted: {new Date(post.timestamp.seconds * 1000).toISOString()}</b>
                    <p>{post.body}</p>
                  </div>
                </div>
                )
            })
          }
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
    },
    dispatchFetchPosts: thread => {
      dispatch(fetchPosts(thread));
    }
  }
}

function mapStateToProps(state) {
  const props = { 
    posts: state.thread.posts,
    loading: state.thread.loading,
    error: state.thread.error
  };
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
