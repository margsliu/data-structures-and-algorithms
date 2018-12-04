// assumes inputArray is already sorted, unlike indexOf
function binarySearch (inputArray, desiredValue) {
  if (!inputArray.length) return -1;
  if (inputArray.length === 1) return inputArray[0] === desiredValue ? 0 : -1;

  // index is inclusive
  let startIndex = 0;
  let endIndex = inputArray.length;
  while (true) {
    const checkIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const checkValue = inputArray[checkIndex];
    if (checkValue === desiredValue) return checkIndex;
    else if (checkValue < desiredValue) {
      if (startIndex === checkIndex) break;
      startIndex = checkIndex;
    } else if (checkValue > desiredValue) {
      if (endIndex === checkIndex) break;
      endIndex = checkIndex;
    }
  }
  return -1;
}

module.exports = binarySearch;

