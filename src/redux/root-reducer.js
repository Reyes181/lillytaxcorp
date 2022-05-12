import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import languageReducer from './language.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['language']
}

const rootReducer = combineReducers({
    language: languageReducer
});

export default persistReducer(persistConfig, rootReducer);