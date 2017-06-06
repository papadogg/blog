import * as ACTION from '../const/actions';

const initialState = {
    posts: [
        {   
            id: 1,
            title: "Darren Hardy",
            text: "This is the blog of the author/publisher of SUCCESS Magazine, Darren Hardy, a success mentor to CEOs. He has interviewed a number of highly successful people like Richard Branson, Jack Welch, Elon Musk and Mark Zuckerberg. You can read a number of inspirational posts and watch motivational videos on his blog.",
            author: "John",
            tags: ["blog", "magazine"]
        },
        {   
            id: 2,
            title: "The Positivity Blog",
            text: "You can use this blog of Henrik Edberg to make your life more simple, happy and fulfilling. He experiments with his own life and shares the tips, tricks and knowledge that he gains from it in his blog. For Henrik, both he and his blog are a work in progress. You will find a load of practical and easy to adopt and follow tips in his blog, that can truly turn you life around.",
            author: "Andy",
            tags: ["life", "magazine"]
        },
        {   
            id: 3,
            title: "My Nintendo News",
            text: "Nintendo is the world’s largest revenue earning video game company. The blog My Nintendo News is updated regularly with the latest news on NX, Wii U and Nintendo 3DS news.",
            author: "Andy",
            tags: ["games", "blog"]
        }
    ],
    tags: ["magazine", "blog", "games", "life"],
    authorFilter: "",
    tagFilter: [],
    newPostTitle: "",
    newPostText: "",
    newPostTags: ""
};


export default function posts(state = initialState, action) {
    switch (action.type) {
        case ACTION.POST_ADD:
          return addPost(state, action);
        case ACTION.POST_DELETE:
            return deletePost(state, action);
        case ACTION.SET_AUTHOR_FILTER:
            return setAuthorFilter(state,action);
        case ACTION.SET_TAG_FILTER:
            return setTagFilter(state,action); 
        case ACTION.SET_NEW_POST_TITLE:
            return setNewPostTitle(state,action);   
        case ACTION.SET_NEW_POST_TEXT:
            return setNewPostText(state,action);  
        case ACTION.SET_NEW_POST_TAGS:
            return setNewPostTags(state,action);  
        case ACTION.CLEAR_NEW_POST:
            return clearNewPost(state, action);
        default:
          return state;
    }
}

function addPost (state, action) {
    const posts = [
        action.payload,
        ...state.posts
    ];
    const tags = [
        ...state.tags
    ];
    action.payload.tags.forEach(tag=>{
        if(tags.find(stateTag=> stateTag === tag)){
            return;
        }
         tags.push(tag);
    });
    const _state = {
        ...state,
        posts,
        tags
    };
    
    return _state;
}

function deletePost (state, action) {
    const _state = {
        ...state,
        posts: state.posts.filter(post=> post.id !== action.payload)
        
    };
    return _state;
}


function setAuthorFilter (state, action) {
    const _state = {
        ...state,
        authorFilter: action.payload
    };
    return _state;
}

function setTagFilter (state, action) {
    const tagFilter = [
        ...state.tagFilter
    ];
    
    const newTag = action.payload;
    if(tagFilter.find(tag=> tag === newTag)){
      tagFilter.splice(tagFilter.indexOf(newTag),1);
    } else {
      tagFilter.push(newTag);
    }
    
    const _state = {
        ...state,
        tagFilter
    };
    return _state;
}

function setNewPostTitle (state, action) {
    const _state = {
        ...state,
        newPostTitle: action.payload
    };
    return _state;
}

function setNewPostText (state, action) {
    const _state = {
        ...state,
        newPostText: action.payload
    };
    return _state;
}

function setNewPostTags (state, action) {
    const _state = {
        ...state,
        newPostTags: action.payload
    };
    return _state;
}

function clearNewPost (state, action) {
    const _state = {
        ...state,
        newPostTitle: "",
        newPostText: "",
        newPostTags: ""
    };
    return _state;
}