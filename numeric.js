  var T = [7, 2, 4, 5]
  var product = 1
  var sum = 0
  for (var i = 0; i < T.length; i++) {
    product = product * T[i]
    sum = sum + T[i]
  }
  console.log('sum:' + sum + ' product:' + product)
  function Union (arr1, arr2) {
    var arr3 = arr1.concat(arr2)
    var z = []
    var myObj = {}
    var j = 1
    for (var i = 0; i < arr3.length; i++) {
      myObj[arr3[i]] = j
      j++
    }
    for (var key in myObj) {
      z.push(key)
    }
    return z
  }
  var k = Union([1, 2, 3], [100, 2, 1, 10])
  console.log(k);
  function emptyArray (array) {
    array.splice(0, array.length)
    return array
  }
  var w = emptyArray([1, 2, 3, 4])
  console.log(w);
