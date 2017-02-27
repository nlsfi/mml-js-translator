export const AVAILABLE_LANGS = [
  {code: 'fi', title: 'languageSelector.links.fi.title'},
  {code: 'sv', title: 'languageSelector.links.sv.title'},
  {code: 'en', title: 'languageSelector.links.en.title'}
];

export const AVAILABLE_LANG_CODES = AVAILABLE_LANGS.map(lang=>lang.code);
export const DEFAULT_LANG_CODE = AVAILABLE_LANG_CODES[0];

let _passKeys = false;
let _debug = false;
let _lang =  DEFAULT_LANG_CODE;
// var dispatch, getState;

const DICTIONARY = Object.create(null);

// export function makeDict() {
//   let dictionary = Object.create(null);
//   dictionary.fi = parsePropertyFile(fi);
//   dictionary.sv = parsePropertyFile(sv);
//   dictionary.en = parsePropertyFile(en);
//   return dictionary;
// }

function addLanguage(lang) {
  if (!DICTIONARY[lang]) {
    DICTIONARY[lang] = {};
  }
}


function addPropertySet(path,language) {
  return parsePropertyFile(props);
}

function parsePropertyFile(propsFile) {
  return JSON.parse(JSON.stringify(propsFile).split(':null').join(':""'));
}

export function setDebug(isOn) {
  _debug = isOn;
}

/*
 *
 * Initialize translator to redux aware module. Dict is parsed from imports.
 * @param dispatchFn is used to save data to redux store (lang, dict)
 * @param getStateFn is used to retrieve data from redux store
 * @param langParam current language
 * @returns {Promise}
 *
 * Sakke's notes:
 * I call bullshit/antipattern on this one.
 * It just broke TranslatorTool and it prevents Translator
 * from being used outside redux context , that is, outside
 * application start cycle.
 *
 * Translator just got downgraded from independent module to
 * Spaghetti Monster.
 *
 *
 */

// export function init(dispatchFn, getStateFn, langParam) {
//   dispatch = dispatchFn;
//   getState = getStateFn;
//   _dict = makeDict();
//   return Promise.all([
//     dispatch(setLanguage(langParam)),
//     // dispatch(saveTranslations(makeDict()))
//   ]);
//   // return {translations:_dict, language:}
// }

export function passKeys(pass) {
  return _passKeys = pass;
}


export function setTranslationLanguage(lang) {
  _lang = lang;
  return _lang;
}

export function getCurrentLangCode() {
  return _lang;
  // return !getState ? DEFAULT_LANG_CODE : getState()['translator']['lang'];
  // //WTF?
  // return !getState ? DEFAULT_LANG_CODE : getState()['translator']['lang'];
}

export default function translate(key, forceLang) {
  // console.log(key);
  // return key;
  const lang = forceLang || _lang;
  if (typeof key === 'object') {
    return key[lang] ? key[lang] : _.values(key)[0];
  }

  if (_passKeys) {
    return key;
  }

  const txt = DICTIONARY[lang][key] || key;
  if (_debug) {
    console.log(txt);
  }
  return txt;

}

translate.addLangauge = addLanguage;
translate.add = addPropertySet;