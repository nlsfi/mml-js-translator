import t, { getCurrentLangCode ,passKeys } from 'Translator/';

import * as fi from 'i18n/kasi_fi';
import * as sv from 'i18n/kasi_sv';
import * as en from 'i18n/kasi_en';


import test1 from './testModule1';
import test2 from './testModule2';

import testProps from './testProps'

describe('translate key', () => {
  it('should work without runtime error even if not populated', () => {
    expect(t('foo')).toEqual('foo');
  });
    //rest are tested by using translate in other tests
});

describe('Translator module', () => {

  t.add(fi,'fi');
  t.add(sv,'sv');
  t.add(en,'en');


  describe('passKeys', () => {
    it('should return current value if no params are given',() => {
      expect(passKeys()).toBe(false);
    });

    it('should set _passKeys to given value and return it',() => {
      expect(passKeys(true)).toBe(true);
      expect(passKeys()).toBe(true);

      expect(passKeys(false)).toBe(false);
      expect(passKeys()).toBe(false);
    });
  });


  describe('getCurrentLangCode', () => {
    it('should return current default language',() => {
      expect(getCurrentLangCode()).toEqual('fi');
    });
  });


  describe('addPropertySet',function(){

    it('should add keys and values from javascript object file to dictionary',function(){
      expect(t('foo.bar')).toEqual('foo.bar');
      t.add({'foo.bar':'Hello'},'fi');
      expect(t('foo.bar')).toEqual('Hello');
    });

    it('should add keys and values from .properties file import to dictionary',function(){
      expect(t('test.property')).toEqual('test.property');
      t.add(testProps,'fi');
      expect(t('test.property')).toEqual('Se on oikein!');
    });

    it('should overwrite previous keys',function(){
      expect(t('test')).toEqual('test value');
      t.add({'test':'Uusi arvo'},'fi');
      expect(t('test')).toEqual('Uusi arvo');
      //ensure other values are not affected
      expect(t('test.property')).toEqual('Se on oikein!');
    });

  });

  xdescribe('parsePropertyFile. Tested implicitly in addPropertySet. Add here if bugs appear', () => {
    it('should parse given property file to Javascript object');
  });

  describe('DICTIONARY scope:', () => {
    it('should have test1 set from testmodule1',() => {
      expect(test1.test()).toEqual('Value for test1');
    });

    it('should have test2 set from testmodule2',() => {
      expect(test2.test()).toEqual('Value for test2');
    });

    it('should overwrite the same keys in order of appearence',() => {
      expect( t('test1') ).toEqual('Value for test1');
      expect( t('test2') ).toEqual('Value for test2');
      expect(t('collision')).toEqual('collision test2');
    });
  //  it('To be decided: should share dictionary state between imports to other modules?');
  });

  describe('Translate object', () => {

    it('should return value in finnish (default lang)',()=>{
      const object = { fi: 'Suomeksi', sv: 'Ruotsiksi' };
      expect(t(object)).toEqual('Suomeksi');
    });

    it('should return value in swedish if no other language key available',()=>{
      const object = { sv: 'Ruotsiksi' };
      expect(t(object)).toEqual('Ruotsiksi');
    });

  });

});
