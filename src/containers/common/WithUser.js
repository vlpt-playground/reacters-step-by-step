// Render Props 를 사용하여 원하는 곳에서 쉽게 유저 조회하는 예제
// PostListPage 에서 사용중

import { connect } from 'react-redux';
const WithUser = ({ children, user }) => {
  return children(user);
};

export default connect(state => ({
  user: state.user.user
}))(WithUser);
