import {combineReducers} from 'redux';
import { regisReducer } from './Regisreducers';

import { authReducers } from './authReducers';
import { listcarReducer } from './listcarReducers';

const rootReducer = combineReducers({
    regis: regisReducer,
    auth: authReducers,
    listCar : listcarReducer,
})

export default rootReducer;