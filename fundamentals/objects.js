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