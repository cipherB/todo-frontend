
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types';


const initialState = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    loading: false,
};



const authReducer = (state = initialState, action) => {
    const {type, payload, username} = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload);
            localStorage.setItem('username', username);
            return {
                ...state,
                loading: false,
                token: payload
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            return {
                ...state,
                token: null,
                loading: false
            }
        default:
            return state
    }
};

export default authReducer;

