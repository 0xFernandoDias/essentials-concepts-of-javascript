const sum1 = function (a, b, c) {
    a = a || 1 // if the prop is undefined than it will become the number 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(
sum1(2), // =4
sum1(5, 5), // =11
sum1(2, 2, 2) // =6
)


// hardest way
const sum2 = function (value){
    a = value !== undefined ? value : 1 // is (value) different of undefined? if yes the Var A is (value), if isn't (a = 1)
    return a
}
console.log(sum2()) // = 1, because the prop value is undefined
console.log(sum2(30)) // 30


//ES2015 standard
const sum3 = function (a=1, b=2, c=3){ // if the prop be undefined put the number 1 on it
    return a+b+c
}

console.log(sum3()) // =6
console.log(sum3(4)) // =9
console.log(sum3(4, 4, 4)) // =12
