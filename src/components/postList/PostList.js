import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.scss';
import { formatDate } from '../../lib/common';

const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div className="post-item" key={post.id}>
          <Link to={`/posts/${post.id}`} className="title">
            {post.title}
          </Link>
          <div className="meta">
            <span className="username">
              by <b>{post.user.username}</b>
            </span>
            <span className="separator">&middot;</span>
            <span className="date">{formatDate(post.created_at)}</span>
          </div>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
