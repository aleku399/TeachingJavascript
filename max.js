var array = [43, 56, 23, 89, 88, 90, 99, 652]
function large (array, n) {
  array.sort(function (a, b) { return (a - b) })
  var nth = array[array.length - n]
  return nth
}
console.log(large(array, 4));
function getRandom (array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      console.log('the item is present: ' + item);
    }
  }
}
getRandom([1, 'tea', 3, true], true)
function preFilled (length, value) {
  for (var i = 0; i < array.length; i++) {
    array[i] = value
  }
  return array
}
console.log(preFilled(6, 8));
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
function move (array, value, positionchange) {
  var first = array.indexOf(value)
  if (first > -1) {
    var second = first + positionchange
    if (second < 0) {
      second = 0
    } else if (second > array.length) {
      second = array.length
    }
    var d = array.slice()
    d.splice(first, 1)
    d.splice(second, 0, value)
    return d
  }
  return array
}
var g = move([10, 20, 30, 40, 50], 10, -1)
console.log(g);
