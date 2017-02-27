import _ from 'lodash/core';
// import {setLanguage, saveTranslations} from './TranslatorActions';
// Module main storage

// Needs to be tested if this is shared between imports to different modules

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

export function parsePropertyFile(propsFile) {
  return JSON.parse(JSON.stringify(propsFile).split(':null').join(':""'));
}

const DICTIONARY = {};

export function passKeys(pass) {
  return _passKeys = pass;
}

export function setTranslationLanguage(lang) {
  _lang = lang;
  return _lang;
}

export function getCurrentLangCode() {
  return _lang;
}

export function addPropertySet(raw,lang) {
  DICTIONARY[lang] = { ...DICTIONARY[lang] || {}, ...parsePropertyFile(raw) };
}

translate.add = addPropertySet;

export default function translate(key, forceLang) {

  const lang = forceLang || _lang;

  if (typeof key === 'object') {
    return key[lang] ? key[lang] : _.values(key)[0];
  }

  if (_passKeys) {
    return key;
  }

  return DICTIONARY[lang][key] || key;
}