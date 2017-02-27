import {SAVE_TRANSLATIONS, SET_LANGUAGE} from './TranslatorActionTypes';

export function saveTranslations(translations) {
  return {
    type: SAVE_TRANSLATIONS,
    translations
  };
}
export function setLanguage(lang) {
  return {
    type: SET_LANGUAGE,
    lang
  };
}