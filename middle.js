
const middle = function(arr) {
  let arrMid = (arr.length - 1) / 2;

  if (arrMid % 1 !== 0) {
    return [arr[Math.floor(arrMid)], arr[Math.ceil(arrMid)]];
  }

  return [arr[arrMid]];
}

module.exports = middle;
