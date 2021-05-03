let newArr = [];
let flatten = function(arr) {
  arr.forEach(function(element) {
    if (Array.isArray(element)) flatten(element);
    else newArr.push(element);
  });
  return newArr;
}

module.exports = flatten;