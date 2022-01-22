import {combineReducers} from 'redux';

import counterReducer from "./base/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
