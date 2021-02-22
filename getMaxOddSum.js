const getMaxOddSum = async (intArray) => {
  const oddArray = [];
  const evenArray = [];
  intArray.forEach((int) => {
    if (int % 2) {
      oddArray.push(int);
    } else {
      evenArray.push(int);
    }
  });
  //wrap in promise to run in parallel
  await Promise.all([
    Promise.resolve(oddArray.sort((a, b) => b - a)),
    Promise.resolve(evenArray.sort((a, b) => b - a)),
  ]);
  return oddArray[0] + evenArray[0];
};

module.exports = getMaxOddSum;
