import t from 'helpers/Translator/Translator';
describe('testing test',()=>{
	it('should run a test',()=>{
		expect('foo').not.toBe('bar');
	});
});

describe('getCurrentLangCode',function(){
  it('should return current default language');
});

describe('addLanguage',function(){
  it('should add new language branch to module\'s dictionary');
})

describe('addPropertySet',function(){
  it('should add keys and values from propertie file to dictionary',function(){
    expect(t('app.logo.title')).to.equal('app.logo.title');
    t.add(fi,'fi');
    expect(t('app.logo.title')).not.to.equal('app.logo.title');
  });
});

describe('parsePropertyFile',function(){
  it('should parse given property file to Javascript object');
});

describe('translate key', () => {

  it('should work without runtime error even if not populated',() => {
    expect(t('foo')).to.equal('foo');
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
