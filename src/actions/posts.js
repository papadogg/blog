import * as ACTION from '../const/actions';

export function addPost (newPost) {  
    return {
        type: ACTION.POST_ADD,
        payload: newPost
    };
}

export function deletePost (id) {  
    return {
        type: ACTION.POST_DELETE,
        payload: id
    };
}

export function setAuthorFilter (character) {  
    return {
        type: ACTION.SET_AUTHOR_FILTER,
        payload: character
    };
}

export function setTagFilter(tag) {
    return {
        type: ACTION.SET_TAG_FILTER,
        payload: tag
    };
}


export function setNewPostTitle(character) {
    return {
        type: ACTION.SET_NEW_POST_TITLE,
        payload: character
    };
            }   

export function setNewPostText(character) {
   return {
        type: ACTION.SET_NEW_POST_TEXT,
        payload: character
    };
}

export function setNewPostTags(character) {
    return {
        type: ACTION.SET_NEW_POST_TAGS,
        payload: character
    };
}

export function clearNewPost() {
    return {
        type: ACTION.CLEAR_NEW_POST
    };
}