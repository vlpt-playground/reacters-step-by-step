import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Responsive from './Responsive';

const Header = ({ user, onLogout }) => {
  return (
    <Responsive>
      <div className="Header">
        <Link to="/" className="logo">
          REACTERS
        </Link>
        <div className="right-area">
          {user ? (
            <div className="logged-in">
              <div className="username">{user.username}</div>
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </div>
      </div>
    </Responsive>
  );
};

export default Header;
