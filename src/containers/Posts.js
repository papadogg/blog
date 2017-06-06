import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from './Post';
import { Link } from 'react-router-dom';

import * as postsActions from '../actions/posts';

class Posts extends Component {
  
  
  filterByAuthor(posts) {
    const filteredPosts= posts.filter(post => post.author.toLowerCase().indexOf(this.props.posts.authorFilter.toLowerCase()) !== -1);
    return filteredPosts;
  }
  
  filterByTags(posts) {
    const filteredPosts = [];
    const tags = this.props.posts.tagFilter;
    
    if(tags.length === 0) {
      return posts;
    }
   
    posts.forEach(post => {
      let exist = tags.every((val) => post.tags.includes(val))
      if(!exist) {
        return;
      }
      if(filteredPosts.indexOf(post) === -1) {
         filteredPosts.push(post);
      }
    });
    return filteredPosts;
  }
  
  handleChange = (e) => {
    this.props.postsActions.setAuthorFilter(e.target.value);
  }
  
  handleTagClick = (e) => {
    const newTag = e.target.innerHTML;
    this.props.postsActions.setTagFilter(newTag);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <input className="filter" name="author" value={this.props.posts.authorFilter} onChange={this.handleChange} placeholder="Search by author" />
          <div>{this.props.posts.tags.map(tag=> <span key={tag} onClick={this.handleTagClick} className={this.props.posts.tagFilter.indexOf(tag) > -1 ? "selected" : "tag"}>{tag}</span>)}</div>
        </div>
        <div className="col-md-9">
          {this.props.auth.authenticated && <Link className="btn btn-primary" to="/new">Add new post</Link>}
          {this.filterByTags(this.filterByAuthor(this.props.posts.posts)).map(post => <Post key={post.id} post={post} />)}
        </div>
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
)(Posts);
