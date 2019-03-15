import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitPost } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import Editor from '../../components/write/Editor';

class EditorContainer extends Component {
  // 취소
  handleCancel = () => {
    this.props.history.goBack();
  };

  // 등록
  handleSubmit = async ({ title, body }) => {
    try {
      await this.props.submitPost({
        title,
        body
      });
      const { post } = this.props;
      this.props.history.push(`/posts/${post.id}`);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return <Editor onSubmit={this.handleSubmit} onCancel={this.handleCancel} />;
  }
}

export default withRouter(
  connect(
    state => ({
      post: state.write.post
    }),
    {
      submitPost
    }
  )(EditorContainer)
);
