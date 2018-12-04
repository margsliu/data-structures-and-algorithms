
function union () {
  const elements = {};
  const union = [];
  for (let i = 0; i !== arguments.length; i++) {
    const array = arguments[i];
    for (let j = 0; j !== array.length; j++) {
      const elem = array[j];
      if (elem in elements) continue;
      elements[elem] = true;
      union.push(elem);
    }
  }
  return union;
}

function intersection () {
  const elements = {};
  for (let i = 0; i !== arguments.length; i++) {
    const array = arguments[i];
    for (let j = 0; j !== array.length; j++) {
      const elem = array[j];
      elements[elem] = elements[elem] || { value: elem, appearedIn: [] };
      if (elements[elem].appearedIn.includes(i)) continue;
      elements[elem].appearedIn.push(i);
    }
  }
  const intersection = [];
  for (let element in elements) {
    const details = elements[element];
    if (details.appearedIn.length === arguments.length) intersection.push(details.value);
  }
  return intersection;
}

function difference () {
  const elements = {};
  for (let i = 0; i !== arguments.length; i++) {
    const array = arguments[i];
    for (let j = 0; j !== array.length; j++) {
      const elem = array[j];
      elements[elem] = elements[elem] || {
        value: elem,
        appearedIn: []
      };
      if (elements[elem].appearedIn.includes(i)) continue;
      elements[elem].appearedIn.push(i);
    }
  }
  const difference = [];
  for (let element in elements) {
    const details = elements[element];
    const isUniqueToOneArray = details.appearedIn.length === 1;
    const isInBaseArray = details.appearedIn[0] === 0;
    if (isUniqueToOneArray && isInBaseArray) difference.push(details.value);
  }
  return difference;

}

module.exports = {
  union: union,
  intersection: intersection,
  difference: difference
}