const assert = require("assert");
const getMaxOddSum = require("./getMaxOddSum");

const runTests = async () => {
  assert.strictEqual(await getMaxOddSum([19, 2, 42, 18]), 61);
  assert.strictEqual(await getMaxOddSum([61, 32, 51]), 93);

  // case for no odd result
  assert.strictEqual(await getMaxOddSum([1, 1]), NaN);
  // case for only 1 number in input array
  assert.strictEqual(await getMaxOddSum([1]), NaN);
};

runTests();
