import { createSelector } from "reselect";

const selectLanguage = state => state.language;

export const selectLanguageChange = createSelector(
    [selectLanguage],
    language => language.isEnglish
);