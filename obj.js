var _ = require('lodash')
function move (arr, pos, newpos) {
  var item = arr[pos];
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (i !== pos) result.push(arr[i])
    if (i === newpos) result.push(item);
  }
  return result;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12
}
_.forIn(student, function (value, key) {
  console.log(key);
})
var k = _.unset(student, 'rollno')

console.log(k, student);
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];
var t = _.map(library, 'author', 'title', 'readingStatus')
console.log(t);
_.forIn(library, function (value, key) {
  console.log(library[0]);
})
var f = _.values(library)
console.log(f);
for (var i = 0; i < library.length; i++) {
  console.log(library[i].author + ' ' + library[i].title + ' ' + library[i].readingStatus);
}
// console.log(library);
function GetVolume (radius, height) {
  this.radius = radius
  this.height = height
}
GetVolume.prototype.volume = function () {
  var radius = (this.radius) / 2
  return Math.floor(radius * radius * this.height * (Math.PI))
}
var circle1 = new GetVolume(5, 9)
console.log(circle1.volume())
var sorted = _.sortBy(library, function (o) { return o.author })
console.log(sorted);
function pairArray (obj) {
  return _.toPairs(obj)
}
console.log(pairArray(student));
function getCopy (obj) {
  var t = _.clone(obj)
  var k = _.invert(t)
  console.log(k);
}
getCopy(student)
console.log(getCopy(student));
function check (obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    console.log('It has the property of ' + prop);
  } else {
    console.log('Not found ' + prop)
  }
}
check(student, 'sclass')
function retrievesValues (obj) {
  for (var key in obj) {
    console.log(obj[key])
  }
}
retrievesValues(student)
