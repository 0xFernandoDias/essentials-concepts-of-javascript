const nums = [1, 2, 3, 4, 5]

const theDouble = nums.map((x) => x * 2)

console.log(theDouble) //[ 2, 4, 6, 8, 10 ]

const sum10 = (e) => e + 10
const triple = (e) => e * 3
const toMoney = (e) => `$ ${parseFloat(e).toFixed(2)}`
const result = nums.map(sum10).map(triple).map(toMoney)

console.log(result)