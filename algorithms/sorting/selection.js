function selectionSort (inputArray) {
  if (!inputArray.length) return [];
  if (inputArray.length === 1) return inputArray;

  for (let i = 0; i !== inputArray.length; i++) {
    let minOfUnsortedIndex = i;
    let minOfUnsortedValue = inputArray[i];
    for (let j = i + 1; j !== inputArray.length; j++) { // unsorted section
      const currentUnsortedValue = inputArray[j];
      if (currentUnsortedValue < minOfUnsortedValue) {
        minOfUnsortedIndex = j;
        minOfUnsortedValue = currentUnsortedValue;
      }
    }
    if (i !== minOfUnsortedIndex) {
      const firstUnsortedValue = inputArray[i];
      inputArray[i] = minOfUnsortedValue;
      inputArray[minOfUnsortedIndex] = firstUnsortedValue; 
    }
  }
  return inputArray;
}

module.exports = selectionSort;