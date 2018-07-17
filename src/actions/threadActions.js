import Firebase from 'firebase';

export const SET_THREAD = 'SET_THREAD';

export const FETCH_POSTS_BEGIN   = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const setThreadState = thread => ({
  type: SET_THREAD,
  thread
});

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export function fetchPosts(thread) {
  return dispatch => {
    dispatch(fetchPostsBegin());
    const collection = Firebase.firestore().collection('posts');
    collection.where('thread', '==', thread).get().then(function(querySnapshot) {
      let posts = [];
      querySnapshot.forEach(post => {
        posts.push(post.data())
      });
      dispatch(fetchPostsSuccess(posts));
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
      dispatch(fetchPostsFailure(error));
    });
  }
}
