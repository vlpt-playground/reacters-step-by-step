import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from '../../components/write/Editor';
import { submitPost, getPost, updatePost } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

class EditorContainer extends Component {
  get id() {
    const { location } = this.props;
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    return query.id;
  }
  initialize = async () => {
    // 수정 할 id 가 있으면 포스트를 불러옴
    const id = this.id;
    if (id) {
      await this.props.getPost(id);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  handleCancel = () => {
    this.props.history.goBack();
  };
  handleSubmit = async ({ title, body }) => {
    try {
      if (this.id) {
        await this.props.updatePost(this.id, {
          title,
          body
        });
      } else {
        await this.props.submitPost({
          title,
          body
        });
      }
      const { post } = this.props;
      this.props.history.push(`/posts/${post.id}`);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { post } = this.props;
    if (this.id && !post) return null; // id 파라미터 있는데 포스트 아직 안불러왔으면 아무것도 렌더링하지 않음
    return (
      <Editor
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
        post={this.id && post}
      />
    );
  }
}

export default withRouter(
  connect(
    state => ({
      post: state.write.post
    }),
    {
      submitPost,
      getPost,
      updatePost
    }
  )(EditorContainer)
);
