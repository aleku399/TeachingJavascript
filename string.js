
// function getArea (x, y, z) {
//   var s = (x + y + z) / 2
//   var a = (s - x) * (s - y) * (s - z)
//   return (Math.sqrt(a * s))
// }
// console.log(getArea(5,6,7))
// var d = new Date()
// console.log(d)
// function isArray (myArray) {
  // return Array.isArray(myArray)
// }
function first (array, n) {
  if (n === undefined || n === 0) {
    return array[0]
  }
  if (array.length === 0 || n < 1) return []
  for (var i = 0; i < n; i++) {
    return array.slice(0, n)
  }
}
console.log(first([7, 9, 0, -2], -3))
// console.log(isArray('w3resource'))
// console.log(isArray([1, 2, 4, 0])
function arrayClone (array) {
  return array.splice(0)
}
console.log(arrayClone([1, 2, 4, 0]))
function last (array, n) {
  if (n === undefined || n === 0) {
    return array[array.length - 1]
  }
  for (var i = 0; i < n; i++) {
    return array.splice(Math.max(array.length - n, 0))
  }
}
console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2], 3))
function isNumber (array) {
  var d = []
  for (var i = 0; i < array.length; i++) {
  console.log(array[i])
}
