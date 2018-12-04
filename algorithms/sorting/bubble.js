function bubbleSort (inputArray) {

  let didSwap;
  do {
    didSwap = false;
    for (let i = 1; i !== inputArray.length; i++) {
      const previousIndex = i - 1;
      const currentIndex = i;
      const previousValue = inputArray[previousIndex];
      const currentValue = inputArray[currentIndex];
      if (previousValue > currentValue) {
        didSwap = true;
        inputArray[currentIndex] = previousValue;
        inputArray[previousIndex] = currentValue;
      }
    }
  } while (didSwap);

  return inputArray;

  /** Less efficient recursive version
  return runSwaps();
  function runSwaps () {
    let didSwap = false;
    for (let i = 1; i !== inputArray.length; i++) {
      const previousIndex = i - 1;
      const currentIndex = i;
      const previousValue = inputArray[previousIndex];
      const currentValue = inputArray[currentIndex];
      if (previousValue > currentValue) {
        didSwap = true;
        inputArray[currentIndex] = previousValue;
        inputArray[previousIndex] = currentValue;
      }
    }
    if (didSwap) runSwaps();
    return inputArray;
  }
  **/

}

module.exports = bubbleSort;