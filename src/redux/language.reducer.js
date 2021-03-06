import LanguageActionTypes from './language.types';

const INITIAL_STATE = {
    isLoading: false,
    isEnglish: true,
    error: null
}

const languageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case LanguageActionTypes.LANG_CHANGE_START:
            return {
                ...state,
                isEnglish: action.payload
            };
        case LanguageActionTypes.LANG_CHANGE_ERROR:
            return {
                ...state,
                error: action.payload.message
            };
        default:
            return state
    }
};

export default languageReducer;