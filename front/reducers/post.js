export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '란자'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://imgur.com/IkTegYG'
        },
        {
            src: 'https://imgur.com/xl5JxwJ'
        },
        {
            src: 'https://imgur.com/3AdbUEP'
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
    ImagePaths: [],
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