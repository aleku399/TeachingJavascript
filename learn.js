function arrayToString (array) {
//  var d = array.toString()
  var c = array.join(' + ')
  // return d
  return c
}
// console.log(arrayToString(myColor = ["Red", "Green", "White", "Black"]))
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]
var m = arr1.sort(function (a, b) { return a - b })
console.log(m)
var num = '025468'
var result = num[1]
console.log(result)
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
function sum (arrays) {
  var newArray = []
  var max = Math.max(array1.length, array2.length)
  for (var i = 0; i < max; i++) {
    if (array1[i] === undefined) {
      array1.push(0)
    } else if (array2[i] === undefined) {
      array2.push(0)
    }
    newArray.push(array1[i] + array2[i])
  }
  return newArray
}
console.log(sum(array1, array2));
function dup (array) {
  var T = {}
  var Z = []
  var j = 1
  for (var i = 0; i < array.length; i++) {
    T[array[i]] = j
    j++
  }
  for (var i in T) {
    Z.push(i)
  }
  return Z
}
console.log(dup(['alex', 'jon', 'letty', 'alex', 'jon']))
