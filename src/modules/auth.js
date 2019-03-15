import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/createPromiseThunk';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; // 특정 값을 수정함
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // 폼에 있는 모든 내용을 공백으로 처리
const REGISTER = 'auth/REGISTER'; // 회원가입
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'; // 회원가입 성공
const LOGIN = 'auth/LOGIN'; // 로그인
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'; //로그인 실패
const SET_ERROR = 'auth/SET_ERROR'; // 에러 메시지 설정

export const changeField = createAction(
  CHANGE_FIELD,
  ({ type, key, value }) => ({
    type, // register, login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, type => type); // register / login
export const register = createPromiseThunk(REGISTER, authAPI.register);
export const login = createPromiseThunk(LOGIN, authAPI.login);
export const setError = createAction(SET_ERROR, msg => msg);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: ''
  },
  login: {
    username: '',
    password: ''
  },
  authorization: null,
  error: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) => ({
      ...state,
      [type]: {
        ...state[type],
        [key]: value
      }
    }),
    [INITIALIZE_FORM]: (state, { payload: type }) => ({
      ...state,
      [type]: initialState[type],
      error: null
    }),
    [REGISTER_SUCCESS]: (state, { payload }) => ({
      ...state,
      authorization: payload.data
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      authorization: payload.data
    }),
    [SET_ERROR]: (state, { payload }) => ({
      ...state,
      error: payload
    })
  },
  initialState
);

export default auth;
