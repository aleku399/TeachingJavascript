var data = require('./tests.json')
console.log(data.school.students[0].name)
var sections = data.school.sections
var items = []
for (var i = 0; i < sections.length; i++) {
  var newName = sections[i] + ' section'
  items.push(newName)
}
console.log(items)
