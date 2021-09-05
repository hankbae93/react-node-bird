import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),               
    ])
}

function logInAPI(data) {
    return axios.post('api/login', data)
}

function* logIn(action) {
    try {
        console.log('saga login')
        yield delay(1000)   
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data
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

function* watchLogin() {   
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* logOut() {
    try {
        yield delay(1000)        
        // const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.reponse.data,
        })
    }    
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}
