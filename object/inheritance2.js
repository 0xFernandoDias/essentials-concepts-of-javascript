console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // all of that is a function

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // this = any string
}

console.log('Home Idiomas'.reverse())