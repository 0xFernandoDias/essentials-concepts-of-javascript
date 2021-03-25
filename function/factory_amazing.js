const createPerson = (name = ``, age = ``, address = ``) => { // if the property is empty just put a string with nothing
    return { // return a obj
        name: `${name}`,
        age: `${age}`,
        address: `${address}`
    }
}

console.log(createPerson('Fernando', '21'))

const newObj = createPerson('Fernando')
console.log(typeof newObj) //obj
console.log(newObj) // { name: 'Fernando', age: '', address: '' }
console.log(newObj.name) // Fernando