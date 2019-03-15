import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import posts from './posts';

const rootReducer = combineReducers({
  auth,
  user,
  posts
});

export default rootReducer;
