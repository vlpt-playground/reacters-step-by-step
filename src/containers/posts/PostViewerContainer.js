import React, { Component } from 'react';
import PostViewer from '../../components/posts/PostViewer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { readPost, removePost } from '../../modules/posts';

class PostViewerContainer extends Component {
  initialize = async () => {
    const { match, readPost } = this.props;
    const { postId } = match.params;
    try {
      await readPost(postId);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  handleEdit = () => {
    const { post, history } = this.props;
    history.push(`/write?id=${post.id}`);
  };

  handleRemove = async () => {
    const { post, history, removePost } = this.props;
    try {
      await removePost(post.id);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { post, user } = this.props;
    if (!post) return null;
    return (
      <PostViewer
        title={post.title}
        body={post.body}
        date={post.created_at}
        username={post.user.username}
        ownPost={post.user.username === (user && user.username)}
        onEdit={this.handleEdit}
        onRemove={this.handleRemove}
      />
    );
  }
}

export default withRouter(
  connect(
    state => ({
      post: state.posts.post,
      user: state.user.user
    }),
    {
      readPost,
      removePost
    }
  )(PostViewerContainer)
);
