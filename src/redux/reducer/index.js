import handleCart from './handleCart'
import { combineReducers } from "redux";
import authReducer from './authReducer';

const rootReducers = combineReducers({
    handleCart,
})

const rootReducer = combineReducers({
    auth: authReducer
    // other reducers...
  });

export default rootReducers




