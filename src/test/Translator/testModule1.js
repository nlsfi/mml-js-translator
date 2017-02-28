import t from 'Translator/';
import * as propsies from './test1';
//.properties

t.add(propsies,'fi');

const test1 = () => t('test1');
const collision = () => t('collision');

const testModule1 = {
  collision,
  test:test1
};

export default testModule1
