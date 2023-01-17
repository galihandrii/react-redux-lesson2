import {combineReducers} from 'redux';
import { regisReducer } from './Regisreducers';

const rootReducer = combineReducers({
    regisReducer: regisReducer,
})

export default rootReducer;