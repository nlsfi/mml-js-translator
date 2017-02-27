import t from 'helpers/Translator/Translator';
import * as fi from 'i18n/kasi_fi';
import * as sv from 'i18n/kasi_sv';
import * as en from 'i18n/kasi_en';

import testProps from './testProps'

describe('testing test',()=>{

  t.add(fi,'fi');
  t.add(sv,'sv');
  t.add(en,'en');

	it('should run a test: t('+t('foo')+')',()=>{
		expect('foo').toBe('foo');
	});
});

describe('getCurrentLangCode',function(){
  it('should return current default language');
});

describe('addLanguage',function(){
  it('should add new language branch to module\'s dictionary');
})

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

describe('parsePropertyFile',function(){
  it('should parse given property file to Javascript object');
});

describe('translate key', () => {

  xit('should work without runtime error even if not populated',() => {
    expect(t('foo')).to.equal('foo');
  });

});

describe('DICTIONARY scope:', ()=>{
  it('To be decided: should share dictionary state between imports to other modules?');
})


describe('Translate object', () => {

  it('should return value in finnish (default lang)',()=>{
    const object = {
      fi: 'Suomeksi',
      sv: 'Ruotsiksi'
    };

    expect(t(object)).toEqual('Suomeksi');
  });

  it('should return value in swedish if no other language key available',()=>{
    const object = {
      sv: 'Ruotsiksi'
    };

    expect(t(object)).toEqual('Ruotsiksi');
  });
});

// TODO deprecated tests because new translator logic (loading via webpack)


/*
describe('translate key', ()=> {

  const state = {
    'my.key': {
      labels: {
        FI: 'Suomeksi',
        SV: 'Ruotsiksi'
      }
    }
  };

  it('should work without runtime error even init is not done',()=>{
    expect(t('foo')).toEqual('foo');
  });

  describe('getSettings',()=>{
    it('should return default empty values when not initiated');

    init(state,'fi');

    it('should return the current lang and map',()=>{
      expect(getSettings().map).toEqual(state);
      expect(getSettings().defaultLang).toBe('fi');
    });
  });

  describe('init',()=>{

    it('should throw an error if initiated with empty params',()=>{
      expect(()=>init(undefined,null)).toThrow(new Error(INIT_ERROR));
    });


    it('should not overwrite previous settings if called with bad values',()=>{
      expect(()=>init(undefined,null)).toThrow(new Error(INIT_ERROR));
      expect(getSettings().map).toEqual(state);
      expect(getSettings().defaultLang).toBe('fi');
    });

    it('should update settings with given parameters',()=>{
      const newMap ={foo:'bar'};
      const newLang = 'FU';
      const dbg = true;
      const newSettings = init(newMap,newLang,dbg);

      expect(newSettings.map).toEqual(newMap);
      expect(newSettings.defaultLang).toBe(newLang);
      expect(newSettings.debug).toBe(dbg);
      //reset debug to prevent log pollution
      init(newMap,newLang,false);

    });

  });

  describe('called with a valid key', ()=> {
    const key = 'my.key';
    describe('finnish language selected', ()=> {
      it('should translate key to Finnish', ()=> {
        init(state, 'FI');
        expect(t(key)).toBe('Suomeksi');
      });
    });
    describe('swedish language selected', ()=> {
      it('should translate key to Swedish', ()=> {
        init(state, 'SV');
        expect(t(key)).toBe('Ruotsiksi');
      });
    });

  });

  describe('called with an invalid key', ()=> {
    const key = 'foo';
    it('should return the key', ()=> {
      init(state, 'FI');
      expect(t(key)).toBe(key);
    });
  });

  describe('called with an invalid lang', ()=> {
    const key = 'my.key';
    it('should return the key', ()=> {
      init(state, 'RU');
      expect(t(key)).toBe(key);
    });
  });
});

describe('Translate object', () => {

  it('should return value in finnish',()=>{
    const object = {
      fi: 'Suomeksi',
      sv: 'Ruotsiksi'
    };

    init({}, 'fi');

    expect(t(object)).toEqual('Suomeksi');
  });

  it('should return value in swedish if no other language key available',()=>{
    const object = {
      sv: 'Ruotsiksi'
    };

    init({}, 'fi');

    expect(t(object)).toEqual('Ruotsiksi');
  });
});
*/
