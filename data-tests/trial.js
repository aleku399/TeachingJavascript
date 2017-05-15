var data = require('./tests.json')


function newData (myData) {
  var myObj = {
    name: 'betty',
    age: 23
  }
  var students = myData.school.students
  students.push(myObj)
  return myData
}

var result = newData(data)

console.log(JSON.stringify(result))

// DONT mutate global object, write functions that take the global object as an argument

// remove entire students from data object

// function that adds an address field to each student { name, age, address }

// a function that returns an array of student names [name, name2 ]


// read later : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
function returnArray (myData) {
  var z = []
  for (var i in myData.school) {
    return z.push(myData.school.students.name)
  }
  return z
}
var answer = returnArray(data)
console.log(JSON.stringify(answer))
function addAdress (myData) {
  for (var i in myData.school) {
    for (var )
  }
}
