import {combineReducers} from 'redux';
import { regisReducer } from './Regisreducers';

import { authReducers } from './authReducers';

const rootReducer = combineReducers({
    regis: regisReducer,
    auth: authReducers,
})

export default rootReducer;