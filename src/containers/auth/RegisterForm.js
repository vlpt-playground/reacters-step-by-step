import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import {
  changeField,
  initializeForm,
  register,
  setError
} from '../../modules/auth';
import { setToken } from '../../lib/api/client';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.props.changeField({
      type: 'register',
      key: name,
      value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { register, form, check, history, setError } = this.props;
    setError(null);
    if (form.password !== form.passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await register({
        username: form.username,
        password: form.password
      });
      const { authorization } = this.props;
      localStorage.setItem('authorization', JSON.stringify(authorization)); // 로컬스토리지에 저장
      setToken(`Bearer ${authorization.access_token}`);
      await check();
      if (!this.props.user) return setError('오류 발생!'); // TODO: 에러처리
      history.push('/');
    } catch (e) {
      if (!e.repseonse) {
        setError('오류 발생!');
        return;
      }
      if (e.response.status === 409) {
        setError('이미 존재하는 아이디입니다.');
      }
    }
  };

  componentDidMount() {
    this.props.initializeForm();
  }

  render() {
    const { form, error } = this.props;
    return (
      <AuthForm
        type="register"
        form={form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

export default connect(
  ({ auth, user }) => ({
    form: auth.register,
    authorization: auth.authorization,
    error: auth.error,
    user: user.user
  }),
  {
    changeField,
    initializeForm,
    register,
    check,
    setError
  }
)(withRouter(RegisterForm));
