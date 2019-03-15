import React, { useState } from 'react';
import './PostActions.scss';
import AskRemove from './AskRemove';

const PostActions = ({ onEdit, onRemove }) => {
  const [ask, setAsk] = useState(false);
  const onRemoveClick = () => {
    setAsk(true);
  };
  const onCancel = () => {
    setAsk(false);
  };
  const onConfirm = async () => {
    onRemove();
  };
  return (
    <>
      <div className="PostActions">
        <div className="buttons">
          <button onClick={onEdit}>수정</button>
          <button onClick={onRemoveClick}>삭제</button>
        </div>
      </div>
      {ask && <AskRemove onConfirm={onConfirm} onCancel={onCancel} />}
    </>
  );
};

export default PostActions;
