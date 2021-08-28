const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {}
}

// thunk 식 request, success, failure
export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
        .then((res) => {
            dispatch(loginSuccessAction(res.data))
        })
        .catch(() => {
            dispatch(logoutFailureAction(err))
        })
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data
    }   
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data
    }   
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',       
    }
}

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',       
        data
    }
}

export const logoutSuccessAction = (data) => {
    return {
        type: 'LOG_OUT_SUCCESS',    
        data   
    }
}

export const logoutFailureAction = (data) => {
    return {
        type: 'LOG_OUT_FAILURE',   
        data    
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {        
        case 'LOG_IN': 
            return {
                ...state.user,
                isLoggedIn: true,
                me: action.data              
            }
        case 'LOG_OUT': 
            return {
                ...state.user,
                isLoggedIn: false,
                me: null              
            }
        default:
            return state;

    }
}

export default reducer;