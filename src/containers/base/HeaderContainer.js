import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/base/Header';

class HeaderContainer extends Component {
  handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authorization');
    window.location.reload();
  };
  render() {
    return <Header user={this.props.user} onLogout={this.handleLogout} />;
  }
}

export default connect(state => ({
  user: state.user.user
}))(HeaderContainer);
