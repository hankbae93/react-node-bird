import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
} from '../reducers/post';


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addPostAPI(data) {
    return axios.post('api/add_post', data)
}

function* addPost() {
    try {
        yield delay(1000)
        yield put({
            type: ADD_POST_REQUEST           
        })
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.reponse.data,
        })
    }    
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function addCommentAPI(data) {
    return axios.Comment(`api/post/${data.post_id}/comment`, data)
}

function* addComment() {
    try {
        yield delay(1000)
        yield put({
            type: ADD_COMMENT_REQUEST           
        })        
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.reponse.data,
        })
    }    
}

export default function* postSaga(){
    yield all([       
        fork(watchAddPost),        
        fork(watchAddComment),        
    ])
}