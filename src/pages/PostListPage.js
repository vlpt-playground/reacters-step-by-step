import React from 'react';
import './PostListPage.scss';
import HeaderContainer from '../containers/base/HeaderContainer';

/**
 * 여러 포스트 목록을 보여주는 페이지
 */
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <div className="PostListPage" />
    </>
  );
};

export default PostListPage;
