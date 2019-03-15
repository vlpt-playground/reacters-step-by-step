import React, { Component } from 'react';
import Pagination from '../../components/postList/Pagination';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

class PaginationContainer extends Component {
  get page() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    return parseInt(query.page || '1', 10);
  }

  render() {
    if (!this.props.hasPosts) return null;
    return <Pagination page={this.page} lastPage={this.props.lastPage} />;
  }
}

export default withRouter(
  connect(state => ({
    hasPosts: !!state.posts.list,
    lastPage: state.posts.list ? Math.ceil(state.posts.list.count / 10) : 1
  }))(PaginationContainer)
);
