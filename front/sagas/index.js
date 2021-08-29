import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
    return axios.post('api/login', data)
}

function* logIn(action) {
    try {
        yield delay(1000)
        yield put({
            type: 'LOG_IN_REQUEST'           
        })
        // const result = yield call(logInAPI, action.data); 
        // call의 경우 logInAPI(action.data)을 이렇게 작성한다 (함수, 매개변수)
        // 이런 형태나 generator는 보통 test에 큰 도움을 준다.
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.reponse.data,
        })
    }    
}


function logOutAPI() {
    return axios.post('api/logout')
}

function* logOut() {
    try {
        yield delay(1000)
        yield put({
            type: 'LOG_OUT_REQUEST'           
        })
        // const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.reponse.data,
        })
    }    
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

function* watchLogin() {
    /*
    while(true) {
        yield take('LOG_IN_REQUEST', logIn); 이러지 않으면 1회용만 사용가능하다
    }
    takeEvery가 while(true)와 같은효과를 내준다 
    그러나 동시에 두번 클릭햇을시 두번 요청을 하게되므로 마지막 응답만 허용하는 takeLatest 사용
    takeLatest는 응답을 두번 받지 않을뿐 실제 서버에는 요청이 두개가 저장되므로 서버에서도 따로 방지를 해줘야한다.
    yield throttle ('ADD_POST_REQUEST', addPost, 10000); 시간동안 같은요청은 실행도 되지않는다
     */
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),        
    ])    
}