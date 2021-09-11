import shortid from "shortid";

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '란자'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            id: shortid.generate(),
            src: 'https://i.pinimg.com/564x/69/45/24/694524d1fb6d857b3de806c9da878870.jpg'
        },
        {
            id: shortid.generate(),
            src: 'https://i.pinimg.com/564x/e1/9d/79/e19d79732b9507c1b2b7001cdaa8ae3a.jpg'
        },
        {
            id: shortid.generate(),
            src: 'https://i.pinimg.com/564x/60/e0/1f/60e01ff3c0175ea53801d639657d187e.jpg'
        }],
        Comments: [{
            id: shortid.generate(),
            User: {
                id: shortid.generate(),
                nickname: 'nero'
            },
            content: '우왕 ㅋ 굳ㅋ '
        },
        {
            User: {
                nickname: 'ranja'
            },
            content: '대답 '
        }
        ]
    }],
    ImagePaths: [

    ],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const dummyPost = (data) => {
    return {
        id: data.id,
        content: data.content,
        User: {
            id: 1,
            nickname: '란자'
        },
        Images: [],
        Comments: []
    }
}

const dummyComment = (data) => ({
    id: shortid.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '란자'
    }
})

export const addPost = (data) => {
    return {
        type: ADD_POST_REQUEST,
        data
    }    
};

export const addComment = (data) => {
    return {
        type: ADD_COMMENT_REQUEST,
        data
    }    
};

const reducer = (state = initialState, action) => {
    switch(action.type) {     
        case ADD_POST_REQUEST: 
           return {
               ...state,
               addPostLoading: true,
               addPostDone: false,
               addPostError: null
           }
        case ADD_POST_SUCCESS: 
            return {
                ...state,
                addPostLoading: false,
                addPostDone: true,               
                mainPosts: [dummyPost(action.data), ...state.mainPosts],                
            }
        case ADD_POST_FAILURE: 
            return {
                ...state,
                addPostLoading: false,            
                addPostError: action.error
            }
        case REMOVE_POST_REQUEST: 
           return {
               ...state,
               removePostLoading: true,
               removePostDone: false,
               removePostError: null
           }
        case REMOVE_POST_SUCCESS: {            
            return {
                ...state,
                removePostLoading: false,
                removePostDone: true,               
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),                
            }
        }
        case REMOVE_POST_FAILURE: 
            return {
                ...state,
                removePostLoading: false,            
                removePostError: action.error
            }
        case ADD_COMMENT_REQUEST: 
           return {
               ...state,
               addCommentLoading: true,
               addCommentDone: false,
               addCommentError: null
           }
        case ADD_COMMENT_SUCCESS: {
           const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
           const post = {...state.mainPosts[postIndex]};
           post.Comments = [dummyComment(action.data.content), ...post.Comments];
           const mainPosts = [...state.mainPosts];
           mainPosts[postIndex] = post;

            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,               
                mainPosts             
            }
        }
        case ADD_COMMENT_FAILURE: 
            return {
                ...state,
                addCommentLoading: false,            
                addCommentError: action.error
            }
        default:
            return state;

    }
}

export default reducer;