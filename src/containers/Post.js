import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postsActions from '../actions/posts';

class Post extends Component {
  deletePost = () => {
     this.props.postsActions.deletePost(this.props.post.id); 
  }
  render() {
    const { title, text, author, tags } = this.props.post;
    const renderTags = tags.map(tag=><span key={tag} className="tag">{tag}</span>);
    return (
      <div className="post">
          <h2>{title}</h2>
          <p>{text}</p>
          <span>By {author}</span>{this.props.auth.authenticated && this.props.auth.user === author && <button className="btn btn-danger delete" onClick={this.deletePost}>Delete</button>}
          <br/>
          {renderTags}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postsActions: bindActionCreators(postsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
