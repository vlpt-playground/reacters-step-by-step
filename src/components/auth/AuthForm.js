import React from 'react';
import './AuthForm.scss';
import { Link } from 'react-router-dom';

const textMap = {
  login: '로그인',
  register: '회원가입'
};

/**
 *  회원가입 혹은 로그인 폼을 보여줍니다.
 */
const AuthForm = ({ type, form, error, onChange, onSubmit }) => {
  return (
    <div className="AuthForm">
      <h3>{textMap[type]}</h3>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {type === 'register' && (
          <input
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={form.passwordConfirm}
            onChange={onChange}
          />
        )}
        {error && <div className="error">{error}</div>}
        <button type="submit">{textMap[type]}</button>
      </form>
      <div className="footer">
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
