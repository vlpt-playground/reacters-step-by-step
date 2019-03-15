import React from 'react';
import './PostListPage.scss';
import HeaderContainer from '../containers/base/HeaderContainer';
import Responsive from '../components/base/Responsive';
import WritePostButton from '../components/postList/WritePostButton';
import PostListContainer from '../containers/postList/PostListContainer';
import PaginationContainer from '../containers/postList/PaginationContainer';
import WithUser from '../containers/common/WithUser';

/**
 * 여러 포스트 목록을 보여주는 페이지
 */
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <div className="PostListPage">
          <WithUser>{user => (user ? <WritePostButton /> : null)}</WithUser>
          <PostListContainer />
          <PaginationContainer />
        </div>
      </Responsive>
    </>
  );
};

export default PostListPage;
