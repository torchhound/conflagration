import { combineReducers } from 'redux';
import { SET_BOARD, FETCH_THREADS_BEGIN, 
  FETCH_THREADS_SUCCESS, FETCH_THREADS_FAILURE } from './boardActions';
import { SET_THREAD } from './threadActions';

const initialState = {
  board: {
    threads: [],
    loading: true,
    error: null,
    board: '',
  },
  thread: {
    thread: ''
  }
};

function board(state = initialState.board, action) {
  switch(action.type) {
    case SET_BOARD:
      return {
        ...state, 
        name: action.board
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
        name: action.thread
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