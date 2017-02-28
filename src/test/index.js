import colors from 'colors/safe';
console.log(colors
  .bgWhite
  .black("\n******* JS Translator & .properties loader tests ******\n"));

const testsContext = require.context('./', true, /\-spec\.jsx?$/);
testsContext.keys().forEach(testsContext);
