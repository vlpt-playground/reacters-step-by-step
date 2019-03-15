import React from 'react';
import Responsive from '../components/base/Responsive';
import EditorContainer from '../containers/write/EditorContainer';

/**
 * 글쓰기 페이지
 */
const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
    </Responsive>
  );
};

export default WritePage;
