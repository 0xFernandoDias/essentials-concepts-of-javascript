const person = {
    name: 'Hanna',
    age: 27,
    weight: 80
}
console.log(Object.keys(person)) // name, age, weight
console.log(Object.values(person))

//Object.assign ECMA2015
const destiny = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3,
    d:4}
const objAssign = Object.assign(destiny, obj1, obj2) // that put all objs together into the first one
console.log(objAssign)