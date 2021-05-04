//inheritance

const data = {
    name: 'Fernando',
    age: 20
}

const person = {

}

Object.setPrototypeOf(person, data)
console.log(person.name)
console.log(person) // = { }

// or

const carInfo = {
    engine: 'V8',
    speedMax: 300
}

const ferrari = {
    __proto__: carInfo,
    model: 'California'
}

console.log(ferrari.engine)

////////////////////////////// ok, now we will see how to do almost the same thing doing a class

class GrandFather {
    constructor(lastName){ // that's is like, const any = new GrandFather('Smith'),, any.lastName = 'Smith'
        this.lastName = lastName
    }
}

class Father extends GrandFather { // const any = new Father('Silva', 'Developer')
    constructor(lastName, job){
        super(lastName) // passing the argument Up too, so, this.lastName = 'Silva'
        this.currentJob = job // any.currentJob = 'Pinter'
    }
}

class Son extends Father { // cont any = new Son ()
    constructor () { // I dont need no arguments
        super('Silva', 'Developer') // any.lastName = 'Silva', any.currentJob = 'Developer'
    }
}


const son = new Son

console.log(son) // Son { lastName: 'Silva', currentJob: 'Developer' } 