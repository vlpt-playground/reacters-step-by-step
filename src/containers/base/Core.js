import { Component } from 'react';
import { connect } from 'react-redux';
import { check, tempSetUser } from '../../modules/user';
import { setToken } from '../../lib/api/client';

class Core extends Component {
  initialize = async () => {
    // 로그인 설정 불러오기
    const user = localStorage.getItem('user');
    const authorization = localStorage.getItem('authorization');
    if (!user) return;
    if (!authorization) return;
    this.props.tempSetUser(JSON.parse(user)); // check 이 완료 될 때 까지 임시로 유저정보 보여줌
    const parsedAuth = JSON.parse(authorization);
    setToken(`Bearer ${parsedAuth.access_token}`);
    try {
      await this.props.check();
    } catch (e) {
      localStorage.removeItem('user');
      localStorage.removeItem('authorization');
    }
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    return null;
  }
}

export default connect(
  () => ({}),
  { check, tempSetUser }
)(Core);
