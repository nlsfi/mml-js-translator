import t from 'Translator/';
import * as propsies from './test2';
//.properties

t.add(propsies,'fi');


const test2 = () => t('test2');
const collision = () => t('collision');

const testModule2 = {
  collision,
  test: test2
};

export default testModule2
