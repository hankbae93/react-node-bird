import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, 
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../reducers/user';

function* watchFollow() {   
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function followAPI(data) {
    return axios.post('/follow', data)
}

function* follow(action) {
    try {
        console.log('saga login')
        yield delay(1000)   
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.reponse.data,
        })
    }    
}
function* watchUnfollow() {   
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function unfollowAPI(data) {
    return axios.post('/unfollow', data)
}

function* unfollow(action) {
    try {
        console.log('saga login')
        yield delay(1000)   
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.reponse.data,
        })
    }    
}
function* watchLogin() {   
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logInAPI(data) {
    return axios.post('/user/login', data)
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data)
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.reponse.data,
        })
    }    
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function logOutAPI() {
    return axios.post('/logout')
}

function* logOut() {
    try {
        yield delay(1000)        
        // const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.reponse.data,
        })
    }    
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function signUpAPI(data) {
    return axios.post('/user', data);
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data)          
        console.log(result, "회원가입 요청 성공 RES")
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch (err) {
        console.error(err)
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }    
}


export default function* userSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogin),
        fork(watchLogOut),    
        fork(watchSignUp)           
    ])
}