export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '란자'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://i.pinimg.com/564x/69/45/24/694524d1fb6d857b3de806c9da878870.jpg'
        },
        {
            src: 'https://i.pinimg.com/564x/e1/9d/79/e19d79732b9507c1b2b7001cdaa8ae3a.jpg'
        },
        {
            src: 'https://i.pinimg.com/564x/60/e0/1f/60e01ff3c0175ea53801d639657d187e.jpg'
        }],
        Comments: [{
            User: {
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
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id: 1,
        nickname: '란자'
    },
    Images: [],
    Comments: []
}

export const addPost = () => {
    return {
        type: ADD_POST_REQUEST,
        data
    }    
};

export const addComment = () => {
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
                mainPosts: [dummyPost, ...state.mainPosts],                
            }
        case ADD_POST_FAILURE: 
        return {
            ...state,
            addPostLoading: false,            
            addPostError: action.error
        }
        case ADD_COMMENT_REQUEST: 
           return {
               ...state,
               addCommentLoading: true,
               addCommentDone: false,
               addCommentError: null
           }
        case ADD_COMMENT_SUCCESS: 
            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,               
                mainComments: [dummyPost, ...state.mainPosts],                
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