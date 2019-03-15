import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import {
  changeField,
  initializeForm,
  login,
  setError
} from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';
import { setToken } from '../../lib/api/client';

class LoginForm extends Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.props.changeField({
      type: 'login',
      key: name,
      value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { login, form, check, history, setError } = this.props;

    try {
      await login({
        username: form.username,
        password: form.password
      });
      const { authorization } = this.props;
      localStorage.setItem('authorization', JSON.stringify(authorization)); // 로컬스토리지에 저장
      setToken(`Bearer ${authorization.access_token}`);
      await check();
      if (!this.props.user) return setError('오류 발생!');
      history.push('/');
    } catch (e) {
      if (!e.response) {
        return setError('오류 발생!');
      }
      setError('로그인 실패');
    }
  };

  componentDidMount() {
    this.props.initializeForm();
  }

  render() {
    const { form, error } = this.props;
    return (
      <AuthForm
        type="login"
        form={form}
        error={error}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  ({ auth, user }) => ({
    form: auth.login,
    error: auth.error,
    authorization: auth.authorization,
    user: user.user
  }),
  {
    changeField,
    initializeForm,
    login,
    check,
    setError
  }
)(withRouter(LoginForm));
