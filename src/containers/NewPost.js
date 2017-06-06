import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { Redirect } from 'react-router-dom';

import * as postsActions from '../actions/posts';

class NewPost extends Component {
    
    state = {
        redirect: false
    }
    
    submitHander = (e) => {
        e.preventDefault();
        const { newPostTitle, newPostText, newPostTags } = this.props.posts;
        if(newPostTitle === "" || newPostText === "" || newPostTags === "") {
            return;
        }
        
        const newPost = {
            id: shortid.generate(),
            title: newPostTitle,
            text: newPostText,
            tags: newPostTags.toLocaleLowerCase().split(","),
            author: this.props.auth.user
        };
        
        this.props.postsActions.addPost(newPost); 
        this.props.postsActions.clearNewPost();
        
        this.setState({
            redirect: true
        });
    }
    handleChange = (e) =>{
        switch(e.target.name) {
            case "title":
                this.props.postsActions.setNewPostTitle(e.target.value);
                break;
            case "text":
                this.props.postsActions.setNewPostText(e.target.value);
                break;
            case "tags":
                this.props.postsActions.setNewPostTags(e.target.value);
                break;
            default:
                break;
        }
    }
  render() {
     if(!this.props.auth.authenticated) {
        return <Redirect to="/"/>;
    }
    if(this.state.redirect) {
        return <Redirect to="/"/>;
    }
    return (
        <form onSubmit={this.submitHander}>
            <h2>New post</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={this.props.posts.newPostTitle} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <textarea className="form-control" rows="5" id="text" name="text" value={this.props.posts.newPostText} onChange={this.handleChange}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="tags">Tags:</label>
                <input type="text" className="form-control" id="tags" placeholder="Add tags separated by comma" name="tags" value={this.props.posts.newPostTags} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success">Add post</button>
            </div>
        </form>
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
)(NewPost);
