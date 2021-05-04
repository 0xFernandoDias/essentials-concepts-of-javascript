const prod1 = {}
prod1.name = 'iPhone X'
prod1.price = '899.99'
console.log(prod1)

const prod2 = {
    name: 't-shirt',
    price: '15.99',
    details: {
        code: 00010
    }
}
prod2.details.country = 'USA'
// I cannot create two objects like that -> prod2.info.country = 'UK'
console.log(prod2)

delete prod1.price
console.log(prod1)

////////////////////////////

const Cliente = function(){}
console.log(typeof Cliente) //for sure this is a function

console.log(typeof new Cliente) //that (new) is used to create an obj

class Product {}
console.log(typeof Product) // it's a func too
console.log(typeof new Product()) // obj

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