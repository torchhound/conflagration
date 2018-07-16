import Firebase from 'firebase';

export const FETCH_THREADS_BEGIN   = 'FETCH_THREADS_BEGIN';
export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';

export const SET_THREAD = 'SET_THREAD';

export const setThreadState = thread => ({
  type: SET_THREAD,
  thread
});

export const fetchThreadsBegin = () => ({
  type: FETCH_THREADS_BEGIN
});

export const fetchThreadsSuccess = threads => ({
  type: FETCH_THREADS_SUCCESS,
  payload: { threads }
});

export function fetchThreads(board) {
  return dispatch => {
    const collection = Firebase.firestore().collection('threads');
    collection.where('board', '==', board).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  }
}