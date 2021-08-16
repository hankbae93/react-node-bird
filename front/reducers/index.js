import { HYDRATE } from "next-redux-wrapper";
// Next.js 서버사이드렌더링을 위한 것
import user from './user';
import post from './post';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    index: (state = {}, action) => { // Next.js 서버사이드렌더링을 위한 것
        switch(action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload }        
            default:
                return state;
    
        }
    },
    user,
    post
})

export default rootReducer;