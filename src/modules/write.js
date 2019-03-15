import { handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as postsAPI from '../lib/api/posts';

const SUBMIT_POST = 'write/SUBMIT_POST';
const SUBMIT_POST_SUCCESS = 'write/SUBMIT_POST_SUCCESS';
const GET_POST = 'write/GET_POST';
const GET_POST_SUCCESS = 'write/GET_POST_SUCCESS';
const UPDATE_POST = 'write/UPDATE_POST';
const UPDATE_POST_SUCCESS = 'write/UPDATE_POST_SUCCESS';

export const submitPost = createPromiseThunk(SUBMIT_POST, postsAPI.write);
export const getPost = createPromiseThunk(GET_POST, postsAPI.read);
export const updatePost = createPromiseThunk(UPDATE_POST, postsAPI.update);

const initialState = {
  post: null
};

export default handleActions(
  {
    [SUBMIT_POST_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        post: payload.data
      };
    },
    [GET_POST_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        post: payload.data
      };
    },
    [UPDATE_POST_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        post: payload.data
      };
    }
  },
  initialState
);
