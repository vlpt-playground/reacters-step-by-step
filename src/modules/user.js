import { createAction, handleActions } from 'redux-actions';
import * as authAPI from '../lib/api/auth';
import createPromiseThunk from '../lib/createPromiseThunk';

const CHECK = 'user/CHECK'; // 토큰을 사용하여 회원 정보 확인
const CHECK_SUCCESS = 'user/CHECK_SUCCESS'; // 회원 정보 확인 성공
const CHECK_ERROR = 'user/CHECK_ERROR'; // 회원 정보 확인 실패
const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 하고 CHECK 이 성공 할 때 까지 임시로 로그인중임을 보여줘야 할 때 사용

export const check = createPromiseThunk(CHECK, authAPI.check);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

const initialState = {
  user: null
};

export default handleActions(
  {
    [CHECK_SUCCESS]: (state, { payload }) => ({
      ...state,
      user: payload.data
    }),
    [CHECK_ERROR]: state => ({
      ...state,
      user: null
    }),
    [TEMP_SET_USER]: (state, { payload }) => ({
      ...state,
      user: payload
    })
  },
  initialState
);
