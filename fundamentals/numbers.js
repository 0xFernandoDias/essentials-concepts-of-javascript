const peso1 = 2
const peso2 = Number('4') //It's turning the string to a number
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //It's asking if that is true or false

const test1 = 5
const test2 = 8
const total = test1 * peso1 + test2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
