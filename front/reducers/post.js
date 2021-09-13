import shortid, { generate } from "shortid";
import produce from 'immer';
import faker from 'faker';

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

initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map((v, i) => ({
     id: shortid.generate(),
     User: {
        id: shortid.generate(),
        nickname: faker.name.findName()
     },
     content: faker.lorem.paragraph(),
     Images: [{
         src: faker.image.imageUrl()
     }],
     Comments: [{
         User: {
             id: shortid.generate(),
             nickname: faker.name.findName()
         },
         content: faker.lorem.sentence()
     }],
})))

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

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

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            break;
        case LOAD_POSTS_SUCCESS:
            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.mainPosts = action.data.concat(draft.mainPosts);
            draft.hasMorePosts = draft.mainPosts.length < 50;
            break;
        case LOAD_POSTS_FAILURE:
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;
        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
        case ADD_POST_SUCCESS:
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.mainPosts.unshift(dummyPost(action.data));
            break;
        case ADD_POST_FAILURE:
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;
        case REMOVE_POST_REQUEST:
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;
        case REMOVE_POST_SUCCESS:
            draft.removePostLoading = false;
            draft.removePostDone = true;
            draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
            break;
        case REMOVE_POST_FAILURE:
            draft.removePostLoading = false;
            draft.removePostError = action.error;
            break;
        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;
        case ADD_COMMENT_SUCCESS: {
            const post = draft.mainPosts.find((v) => v.id === action.data.postId);
            post.Comments.unshift(dummyComment(action.data.content));
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            break;     
        }
        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = false;
            draft.addCommentError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;