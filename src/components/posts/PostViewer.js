import React from 'react';
import './PostViewer.scss';
import { formatDate } from '../../lib/common';

const PostViewer = ({ title, username, date, body }) => {
  return (
    <div className="PostViewer">
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
