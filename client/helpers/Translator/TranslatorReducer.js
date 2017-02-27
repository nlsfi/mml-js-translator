import {SAVE_TRANSLATIONS, SET_LANGUAGE} from './TranslatorActionTypes';

const initialState = {
  lang: {},
  translations: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_TRANSLATIONS:
      return Object.assign({}, state, {translations: action.translations});
    case SET_LANGUAGE:
      return Object.assign({}, state, {lang: action.lang});
    default:
      return state;
  }
}