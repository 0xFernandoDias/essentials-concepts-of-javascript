const cart = [ // array of json
    '{"name": "eraser", "price": 3.45}',
    '{"name": "notebook", "price": 13.90}',
    '{"name": "pencil kit", "price": 41.20}',
    '{"name": "pen", "price": 4.00}'
]

const toObject = (jsonData) => JSON.parse(jsonData)
const onlyPrice = (product) => product.price

const result = cart.map(toObject).map(onlyPrice)

console.log(result) //[ 3.45, 13.9, 41.2, 4 ]