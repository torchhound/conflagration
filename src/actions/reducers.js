import { combineReducers } from 'redux';
import { SET_BOARD } from './boardActions';
import { SET_THREAD } from './threadActions';

function board(state = {}, action) {
  switch(action.type) {
    case SET_BOARD:
      return {
        ...state, 
        name: action.board
      }
    default:
      return state;
  }
}

function thread(state = {}, action) {
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

export default imageboard