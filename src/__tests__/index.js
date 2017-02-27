import { expect } from 'chai';
import Translator from '../Translator/Translator';

// intended usage: t('mykey.to.some.value')
// Feel free to use Translator('my.key') if you wwant..

const t = Translator;

describe('translate key', () => {

  it('should work without runtime error even init is not done',() => {
    expect(t('foo')).to.equal('foo');
  });


  // 'should return key if _passKeys is set'


  // 'should parse object


  // describe('called with a valid key', ()=> {
  //   const key = 'my.key';
  //   describe('finnish language selected', ()=> {
  //     it('should translate key to Finnish', ()=> {
  //       init(state, 'FI');
  //       expect(t(key)).toBe('Suomeksi');
  //     });
  //   });
  //   describe('swedish language selected', ()=> {
  //     it('should translate key to Swedish', ()=> {
  //       init(state, 'SV');
  //       expect(t(key)).toBe('Ruotsiksi');
  //     });
  //   });

  // });

// describe('called with an invalid key', ()=> {
//   const key = 'foo';
//   it('should return the key', ()=> {
//     init(state, 'FI');
//     expect(t(key)).toBe(key);
//   });
// });

// describe('called with an invalid lang', ()=> {
//   const key = 'my.key';
//   it('should return the key', ()=> {
//     init(state, 'RU');
//     expect(t(key)).toBe(key);
//   });
// });
});

/*
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