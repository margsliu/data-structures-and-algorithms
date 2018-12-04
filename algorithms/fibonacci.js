
// non-convoluted

function getFibonacci2 (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return getFibonacci2(n - 1) + getFibonacci2(n - 2);
}

console.log(getFibonacci2(6));


// convoluted
function getFibonacci (n) {
  let previous1 = 0;
  let previous2 = 1;
  let currentSum = 0;
  let counter = 2;
  if (n === 0) return 0;
  if (n === 1) return 1;

  return addPreviousTwo(previous1, previous2, currentSum);

  function addPreviousTwo (previous1, previous2, currentSum) {
    if (counter <= n) {
      currentSum = (previous1 + previous2);
      previous1 = previous2;
      previous2 = currentSum;
      counter++;
      return addPreviousTwo(previous1, previous2, currentSum);
    } else {
      return currentSum;
    }
  }
}

console.log(getFibonacci(6));

