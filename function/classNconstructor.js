class Person {
    constructor(name = ``){
        this.personsName = name
    }
    speak() {
        console.log(`my name is ${this.personsName}!`)
    }
}
const person2 = new Person('Fernando')
person2.speak()
console.log(person2)


//constructor way
const personConst = function (name) {
    this.name = name
    this.speak2 = function () {
        console.log(`my name is ${this.name} <3`)
    }
}

const person3 = new personConst('Fernando')
person3.speak2()
console.log(person3.name)