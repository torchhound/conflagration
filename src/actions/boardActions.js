import Firebase from 'firebase';

export const SET_BOARD = 'SET_BOARD';
export const SET_FILE_NAME = 'SET_FILE_NAME';

export const FETCH_THREADS_BEGIN   = 'FETCH_THREADS_BEGIN';
export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
export const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';

export const setBoardState = board => ({
  type: SET_BOARD,
  board
});

export const setFileNameState = fileName => ({
  type: SET_FILE_NAME,
  fileName
});

export const fetchThreadsBegin = () => ({
  type: FETCH_THREADS_BEGIN
});

export const fetchThreadsSuccess = threads => ({
  type: FETCH_THREADS_SUCCESS,
  payload: { threads }
});

export const fetchThreadsFailure = error => ({
  type: FETCH_THREADS_FAILURE,
  payload: { error }
});

export function fetchThreads(board) {
  return dispatch => {
    dispatch(fetchThreadsBegin());
    const collection = Firebase.firestore().collection('threads');
    collection.where('board', '==', board).get().then(function(querySnapshot) {
      let threads = [];
      querySnapshot.forEach((thread) => {
        threads.push(thread.data())
      });
      dispatch(fetchThreadsSuccess(threads));
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
      dispatch(fetchThreadsFailure(error));
    });
  }
}
