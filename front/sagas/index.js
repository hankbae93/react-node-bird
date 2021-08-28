import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
/*
all : 배열을 받으면 동시에 모두 실행

======
fork: 함수 실행 => 비동기 함수 호출 , 바로 실행
axios.post('api/login')
yield put({
    type: 'LOG_IN_SUCCESS',
    data: result.data
})
======
call: 함수실행이지만 다르다 => 동기 함수 호출 , response가 오고 다음함수 실행
axios.post('api/login')
    .then((res) => {
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: res.data
        })
    })
======
take: 액션 실행되서 결과 오기 전까지 기다림 ??
put: 리덕스의 dispatch
*/

function logInAPI(data) {
    return axios.post('api/login', data)
}

function* logIn(action) {
    try {
        yield put({
            type: 'LOG_IN_REQUEST'           
        })
        const result = yield call(logInAPI, action.data); 
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

function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn); // 로그인이라는 액션이 실행되기 전까지 기다리겟다 ;;    
}

function logOutAPI() {
    return axios.post('api/logout')
}

function* logOut() {
    try {
        yield put({
            type: 'LOG_OUT_REQUEST'           
        })
        const result = yield call(logOutAPI);
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

function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function addPostAPI(data) {
    return axios.post('api/add_post', data)
}

function* addPost() {
    try {
        yield put({
            type: 'ADD_POST_REQUEST'           
        })
        const result = yield call(addPostAPI, action.data);
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
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),        
    ])    
}