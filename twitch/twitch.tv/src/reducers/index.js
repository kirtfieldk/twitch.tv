import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';  //renaming reducer to formReducer for readability
import authReducer from './authReducer';
import StreamReducer from './StreamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: StreamReducer
});