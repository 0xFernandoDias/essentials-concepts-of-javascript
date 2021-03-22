const values = [1.5, 2.2, 3, 4.5, 5.6]
console.log(values[0], values[3])

values[5] = 6.2 // I can pass a new value for a new array position like that
console.log(values)

console.log(values.length) // Length will count how many elements we have in the array

values.push({id: 3}, false, null, 'test') // Push will put more elements in the array
console.log(values)

delete values[0]
console.log(values)

console.log(typeof values) //array in JS is an object