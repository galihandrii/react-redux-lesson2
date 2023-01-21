import {combineReducers} from 'redux';
import { regisReducer } from './Regisreducers';
import { loginReducer } from './Loginreducers';

const rootReducer = combineReducers({
    regis: regisReducer,
    login: loginReducer,
})

export default rootReducer;