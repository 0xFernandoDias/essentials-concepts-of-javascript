//literal form
function fun1() {}

//storing it in a varuable
const fun2 = function() {}

//storing it in an array
const arrayy = [function(a, b){return a+ b}, fun1, fun2]
console.log(arrayy[0](5, 5))

//storing it in an obj prop
const objj = { }
objj.speak = function(){return 'Hello'} // pushing a new obj prop and passing a func for it
console.log(objj.speak())
