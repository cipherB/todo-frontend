import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';

export default combineReducers({
    authReducer,
    alertReducer
});
