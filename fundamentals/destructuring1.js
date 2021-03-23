const lines = '//////////////////////////////'

const person = {
    name: 'Tonny',
    age: 33
}
var { name: n1, age: a1} = person // it gets the specific prop of object person and store them in specifics variables
console.log(n1, a1) // they are variables
console.log(typeof n1)
console.log(typeof a1)
console.log(lines)

//////////////////////////////

const arrayy = ['a', 'b', 'c', 'd', 'e']
const {[0]: letter1, [3]: letter2} = arrayy // = create a const called letter1 and gets the arrayy[0]
console.log(letter1, letter2)