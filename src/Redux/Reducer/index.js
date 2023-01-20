import {combineReducers} from 'redux';
import { regisReducer } from './Regisreducers';

const rootReducer = combineReducers({
    regis: regisReducer,
})

export default rootReducer;