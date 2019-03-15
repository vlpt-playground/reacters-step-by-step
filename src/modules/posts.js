import { handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as postsAPI from '../lib/api/posts';

const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const READ_POST = 'posts/READ_POST';
const READ_POST_PENDING = 'posts/READ_POST_PENDING';
const READ_POST_SUCCESS = 'posts/READ_POST_SUCCESS';
const REMOVE_POST = 'posts/REMOVE_POST';

export const listPosts = createPromiseThunk(LIST_POSTS, postsAPI.listPosts);
export const readPost = createPromiseThunk(READ_POST, postsAPI.read);
export const removePost = createPromiseThunk(REMOVE_POST, postsAPI.remove);

const initialState = {
  list: null
};

export default handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      list: payload.data
    }),
    [READ_POST_PENDING]: state => ({ ...state, post: null }), // 포스트 불러올 때 기존 내용 초기화해줌
    [READ_POST_SUCCESS]: (state, { payload }) => ({
      ...state,
      post: payload.data
    })
  },
  initialState
);
