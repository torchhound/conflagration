import { combineReducers } from 'redux';
import { SET_BOARD } from './boardActions';

function boardReducer(state = [], action) {
  switch(action.type) {
    case SET_BOARD:
      return {
        ...state,
        ...action.board
      }
    default:
      return state
  }
}

const imageboard = combineReducers({
  boardReducer
});

export default imageboard