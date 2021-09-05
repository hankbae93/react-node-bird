import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

export default function* postSaga(){
    yield all([       
        fork(watchAddPost),        
    ])
}

function addPostAPI(data) {
    return axios.post('api/add_post', data)
}

function* addPost() {
    try {
        yield delay(1000)
        yield put({
            type: 'ADD_POST_REQUEST'           
        })
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.reponse.data,
        })
    }    
}


function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}