import colors from 'colors/safe';
console.log(colors
  .bgWhite
  .black("\n******* 2SASI FRONT END TEST SUITE ******\n"));

const testsContext = require.context('./', true, /\-spec\.jsx?$/);
testsContext.keys().forEach(testsContext);
