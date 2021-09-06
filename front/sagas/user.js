import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function* watchLogin() {   
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logInAPI(data) {
    return axios.post('api/login', data)
}

function* logIn(action) {
    try {
        console.log('saga login')
        yield delay(1000)   
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
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
    return axios.post('api/logout')
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

function signUpAPI() {
    return axios.post('api/signUp')
}

function* signUp() {
    try {
        yield delay(1000)                
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.reponse.data,
        })
    }    
}


export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),    
        fork(watchSignUp)           
    ])
}