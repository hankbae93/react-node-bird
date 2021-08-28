import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action); // action을 실행하기전에 한번 실행해주는 미들웨어
    // if (typeof action === 'function') { // thunk에서는 action을 함수로 둘 수 있다
    //     return action(dispatch, getState, extraArgument);
    // }

    return next(action);
}

const configureStore = () => {
    const middlewares = [thunkMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development'});

export default wrapper;


