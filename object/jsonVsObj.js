const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log( // it will turns the obj to json
    JSON.stringify(obj) // {"a":1,"b":2,"c":3}
)

console.log(
    JSON.parse(`{"a":1, "b":"string", "c": true}`) // { a: 1, b: 'string', c: true }
)

