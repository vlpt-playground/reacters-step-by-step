import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import posts from './posts';
import write from './write';

const rootReducer = combineReducers({
  auth,
  user,
  posts,
  write
});

export default rootReducer;
