import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import shortid from 'shortid';

import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, 
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
} from '../reducers/post';
import {
    ADD_POST_TO_ME, REMOVE_POST_OF_ME
} from '../reducers/user';


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addPostAPI(data) {
    return axios.post('api/add_post', data)
}

function* addPost(action) {
    try {
        yield delay(1000)       
        // const result = yield call(addPostAPI, action.data);
        const id = shortid.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data,
            }
        })
        yield put({
            type: ADD_POST_TO_ME,
            data: id
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.reponse.data,
        })
    }    
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function removePostAPI(data) {
    return axios.post('api/remove_post', data)
}

function* removePost(action) {
    try {
        yield delay(1000)       
        // const result = yield call(addPostAPI, action.data);
        const id = shortid.generate();
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
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

function* addComment(action) {
    try {
        yield delay(1000)            
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
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
        fork(watchRemovePost),        
    ])
}