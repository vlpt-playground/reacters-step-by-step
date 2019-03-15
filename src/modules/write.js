import { handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as postsAPI from '../lib/api/posts';

const SUBMIT_POST = 'write/SUBMIT_POST';
const SUBMIT_POST_SUCCESS = 'write/SUBMIT_POST_SUCCESS';

export const submitPost = createPromiseThunk(SUBMIT_POST, postsAPI.write);

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
    }
  },
  initialState
);
