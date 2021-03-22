console.log(!true) //false, only one exclamation means it's different of the value
console.log(!!true) //true, two exclamations means it's equals of the value

let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

// all of values are false except the last one
console.log(!!('' || null || 0 || ' ')) // the || means OR, if only one of that values been true it means that whole operation is also true
// ^ it's like (false OR false OR false OR true) = true


