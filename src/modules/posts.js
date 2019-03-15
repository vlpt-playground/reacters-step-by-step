import { handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as postsAPI from '../lib/api/posts';

const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';

export const listPosts = createPromiseThunk(LIST_POSTS, postsAPI.listPosts);

const initialState = {
  list: null
};

export default handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      list: payload.data
    })
  },
  initialState
);
