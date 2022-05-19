import LanguageActionTypes from "./language.types";

export const getLanguageChangeStart = (lang) => ({
    type: LanguageActionTypes.LANG_CHANGE_START,
    payload: lang
});

export const getLanguageChangeSuccess = (data) => ({
    type: LanguageActionTypes.LANG_CHANGE_SUCCESS,
    payload: data
});

export const getLanguageChangeFailure = (error) => ({
    type: LanguageActionTypes.LANG_CHANGE_ERROR,
    payload: error
});
