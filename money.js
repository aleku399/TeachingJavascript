var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var arr2 = arr1.sort()
function mostFrequent (arr1) {
  var times = 0
  var max = 1
  var result = 0
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1]) {
      times++
    } else {
      times = 0
    }
    if (times > max) {
      result = arr1[i]
      var times2 = max + times
    }
  }
  console.log('most frequent: ' + result + ' most times : ' + times2)
}
mostFrequent(arr2)
var z = [2, 5, 9, 6]
function Remove (array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array.splice(i, 1)
      break;
    }
  }
  return array
}
console.log(Remove(z, 5))
function mergeArray (array1, array2) {
  var array3 = array1.concat(array2)
  var d = []
  var t = {}
  var j = 1
  for (var i = 0; i < array3.length; i++) {
    t[array3[i]] = j
    j++
  }
  for (var key in t) {
    d.push(key)
  }
  return d
}
var k = mergeArray([1, 2, 3], [2, 30, 1])
console.log(k);
var numbers = [10, 20, 10, 40, 60, 60, 70]
function pos (a, b) {
  // var arr = []
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === b) {
    //    var a[i] = b
      //  var a[j] = t
    //    arr = [b, t]
      }
    }
  }
  // var d = arr.indexOf(a[i])
  // var l = arr.indexOf(a[j])
  // console.log('first: ' +  + ' second: ' + )
}
pos(numbers, 50)
