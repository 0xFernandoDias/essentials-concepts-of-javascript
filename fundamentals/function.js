//function with no return
function printSum(a, b){
    console.log(a+b)
}
printSum(10, 5)


//function with a return
function sum(a, b){
    return a+b
}
console.log(sum(50, 50))


//storing a function in a variable
const subtraction = function(a, b){
    return a-b
}
console.log(subtraction(10, 5))


//storing an arrow function in a variable
const division = (a, b) => {
    return a/b
}
console.log(division(100, 50))


//implicit return
const multiplication = (a, b) => a*b
console.log(multiplication(2, 2))

const idk = a => console.log(a)
idk('Hello')
