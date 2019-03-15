import React from 'react';
import './PostViewer.scss';
import { formatDate } from '../../lib/common';
import PostActions from './PostActions';

const PostViewer = ({
  title,
  body,
  username,
  date,
  ownPost,
  onEdit,
  onRemove
}) => {
  return (
    <div className="PostViewer">
      {ownPost && <PostActions onEdit={onEdit} onRemove={onRemove} />}
      <h1 className="title">{title}</h1>
      <div className="meta">
        <span className="username">
          by <b>{username}</b>
        </span>
        <span className="separator">&middot;</span>
        <span className="date">{formatDate(date)}</span>
      </div>
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: body
        }}
      />
    </div>
  );
};

export default PostViewer;
