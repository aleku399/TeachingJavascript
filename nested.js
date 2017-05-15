var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
for (var i = 0; i < a.length; i++) {
  console.log('row ' + i)
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j])
  }
}
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null]
function displayNum (array) {
  var d = []
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      d.push(array[i])
    }
  }
  return d
}
var s = displayNum(array)
console.log(s);
function arrayRange (value, length) {
  var arr = []
  for (var i = 0; i < length; i++) {
    arr[i] = value
  //  value++
  }
  return arr
}
console.log(arrayRange(8, 4));
function RangeBtn (a, b) {
  if (a > b) {
    var arr = new Array(a - b + 1)
    for (var i = 0; i < arr.length; i++) {
      arr[i] = a
      a--
    }
    return arr
  } else {
    var arr2 = new Array(b - a + 1)
    for (var j = 0; j < arr2.length; j++) {
      arr2[j] = a
      a++
    }
    return arr2
  }
}
var k = RangeBtn(22, 7)
console.log(k);
