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
    postAdded: false
}

const ADD_POST = 'ADD_POST';

export const addPost = () => {
    return {
        type: ADD_POST
    }    
};

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

const reducer = (state = initialState, action) => {
    switch(action.type) {     
        case ADD_POST: 
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }   
        default:
            return state;

    }
}

export default reducer;