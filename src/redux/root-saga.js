import {call, all} from 'redux-saga/effects';

import {languageSagas} from './language.sagas';

export default function* rootSaga() {
    yield all([call(languageSagas)])
};