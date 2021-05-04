const cart = [
    {name: "eraser", price: 3.45},
    {name: "notebook", price: 13.90},
    {name: "pencil kit", price: 41.20},
    {name: "pen", price: 4.00}
]

console.log(
    cart.filter( // this is a custom map function 
        (product) => {
            return product.price > 5
        }
    )
)