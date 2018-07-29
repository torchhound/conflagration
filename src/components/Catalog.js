import React, { Component } from 'react';
import Navbar from './Navbar';
import CreateThread from './createThread';
import { setBoardState, fetchThreads,
  setThreadTitleState } from '../actions/boardActions';
import { connect } from 'react-redux';

class Catalog extends Component {
  componentDidMount() {
    const board = this.props.match.params.board;
    this.props.dispatchBoard(board);
    this.props.dispatchFetchThreads(board);
  }

  render() {
    const { error, loading, threads } = this.props;

    let alertDiv = '';

    if (error) {
      alertDiv = <div className="notification is-danger">Error: {error}</div>
    }   

    if (loading) {
      alertDiv = <div className="notification is-primary is-loading">Loading...</div>
    } 

    return (
      <div className="Catalog">
        <header>
          <h1 className="title">/{this.props.match.params.board}/ - Catalog</h1>
          <CreateThread/>
        </header>
        {alertDiv}
        <div className="columns is-multiline">
          {
            threads.map((thread, x)=> {
              return (
                <div key={x} className="column is-one-quarter">
                  <div className="box">
                    <figure className="image is-128x128">
                      <img src={thread.first.url}/>
                    </figure>
                    <b>Posted: {new Date(thread.timestamp.seconds * 1000).toISOString()}</b><br/>
                    <a href={`/thread/${thread.id}`}>{thread.subject}</a>
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
    dispatchBoard: board => {
      dispatch(setBoardState(board));
    },
    dispatchFetchThreads: board => {
      dispatch(fetchThreads(board));
    },
    dispatchThreadTitle: threadTitle => {
      dispatch(setThreadTitleState(threadTitle));
    }
  }
}

const mapStateToProps = state => {
  return { 
    threads: state.board.threads,
    loading: state.board.loading,
    error: state.board.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
