import { combineReducers } from 'redux';
import { SET_BOARD, FETCH_THREADS_BEGIN, 
  FETCH_THREADS_SUCCESS, FETCH_THREADS_FAILURE,
  SET_BOARD_FILE_NAME, POST_THREAD_SUCCESS,
  SET_BOARD_THREAD_TITLE } from './boardActions';
import { SET_THREAD, FETCH_POSTS_BEGIN, 
  FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
  SET_THREAD_FILE_NAME, POST_REPLY_SUCCESS,
  SET_THREAD_TITLE } from './threadActions';

const initialState = {
  board: {
    threads: [],
    loading: true,
    error: null,
    board: '',
    fileName: '',
    replySuccess: null
  },
  thread: {
    posts: [],
    loading: true,
    error: null,
    thread: '',
    fileName: '',
    replySuccess: null,
    threadTitle: ''
  }
};

function board(state = initialState.board, action) {
  switch(action.type) {
    case SET_BOARD:
      return {
        ...state, 
        name: action.board
      }
    case SET_BOARD_FILE_NAME:
      return {
        ...state,
        fileName: action.fileName
      }
    case SET_BOARD_THREAD_TITLE:
      return {
        ...state,
        threadTitle: action.threadTitle
      }
    case POST_THREAD_SUCCESS:
      return {
        ...state,
        replySuccess: action.bool
      }
    case FETCH_THREADS_BEGIN:
      return{
        ...state,
        loading: true,
        error: null
      }
    case FETCH_THREADS_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
        threads: action.payload.threads
      }
    case FETCH_THREADS_FAILURE:
      return{
        ...state,
        loading: true,
        error: action.payload.error
      }
    default:
      return state;
  }
}

function thread(state = initialState.thread, action) {
  switch(action.type) {
    case SET_THREAD:
      return {
        ...state,
        thread: action.thread
      }
    case SET_THREAD_FILE_NAME:
      return {
        ...state,
        fileName: action.fileName
      }
    case SET_THREAD_TITLE:
      return {
        ...state,
        threadTitle: action.threadTitle
      }
    case POST_REPLY_SUCCESS:
      return {
        ...state,
        replySuccess: action.bool
      }
    case FETCH_POSTS_BEGIN:
      return{
        ...state,
        loading: true,
        error: null
      }
    case FETCH_POSTS_SUCCESS:
      return{
        ...state,
        loading: false,
        error: null,
        posts: action.payload.posts
      }
    case FETCH_POSTS_FAILURE:
      return{
        ...state,
        loading: true,
        error: action.payload.error
      }
    default:
      return state;
  }
}

const imageboard = combineReducers({
  board,
  thread
});

export default imageboard;