import React from 'react';
import HeaderContainer from '../containers/base/HeaderContainer';
import Responsive from '../components/base/Responsive';
import PostViewerContainer from '../containers/posts/PostViewerContainer';

/**
 * 포스트 읽는 페이지
 */
const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PostViewerContainer />
      </Responsive>
    </>
  );
};

export default PostPage;
