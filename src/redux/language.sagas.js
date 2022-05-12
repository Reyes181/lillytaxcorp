import { takeLatest, put, all, call } from "redux-saga/effects";
import LanguageActionTypes from "./language.types";
import {getLanguageChangeSuccess, getLanguageChangeFailure} from './language.action';

const putGetLanguageChange = async (lang) => {
    let results;
    results = lang
    return results;
}


export function* getLanguageChange(lang){
    try {
        const langChange = yield call(putGetLanguageChange, lang)
        yield put(getLanguageChangeSuccess(langChange))
    } catch(error){
        yield getLanguageChangeFailure(error)
    }
}

export function* changeLanguageStart() {
    yield takeLatest(
        LanguageActionTypes.LANG_CHANGE_START,
        getLanguageChange
    )
}

export function* languageSagas() {
    yield(all([
        call(changeLanguageStart)
    ]))
};