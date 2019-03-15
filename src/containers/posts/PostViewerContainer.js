import React, { Component } from 'react';
import PostViewer from '../../components/posts/PostViewer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { readPost } from '../../modules/posts';

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

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <PostViewer
        title={post.title}
        body={post.body}
        date={post.created_at}
        username={post.user.username}
        onEdit={this.handleEdit}
        onRemove={this.handleRemove}
      />
    );
  }
}

export default withRouter(
  connect(
    state => ({
      post: state.posts.post
    }),
    {
      readPost
    }
  )(PostViewerContainer)
);
