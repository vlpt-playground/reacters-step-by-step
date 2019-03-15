import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'qs';
import { listPosts } from '../../modules/posts';
import PostList from '../../components/postList/PostList';

class PostListContainer extends Component {
  get page() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    return parseInt(query.page || '1', 10);
  }

  loadPosts = async () => {
    await this.props.listPosts(this.page);
    window.scrollTo(0, 0);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.loadPosts();
    }
    if (prevProps.posts !== this.props.posts) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    if (!this.props.list) return null;
    return <PostList posts={this.props.list.posts} />;
  }
}

export default withRouter(
  connect(
    state => ({
      list: state.posts.list
    }),
    {
      listPosts
    }
  )(PostListContainer)
);
