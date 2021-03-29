//Object.assign ECMA2015
const destiny = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3,
    d:4}
const objAssign = Object.assign(destiny, obj1, obj2) // that put all objs together into the first one
console.log(objAssign)