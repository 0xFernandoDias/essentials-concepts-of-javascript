class Person { // that's a function and it works like: function Person(name) { }

    constructor(name = ``){
        this.personsName = name
    }

    speak() {
        console.log(`my name is ${this.personsName}!`)
    }

}

const person2 = new Person('Fernando')
person2.speak()
console.log(person2) // same thing of construction...


//the best way in my opnion is the factory function!
const createPerson = (name) => {
    return {
        theName: name,
        speak: () => {
            console.log(`Hi, my name is ${name} <3`)
        }
    }
}
const personFac = createPerson('Matthew')
personFac.speak()
console.log(personFac)