const lines = '//////////////////////////////'

//that is a Dot Notation exemple, console.log(), Console is a object and Log is a function
console.log()
console.log(typeof console)
console.log(typeof console.log) //that is because .log() is a function inside of the Console object

const obj1 = {}
obj1.name = 'Mary' //I can push a new Prop to the obj
console.log(obj1)
console.log(obj1.name) //It is showing us a prop of obj1

obj1.funcc = yessir = () => { console.log('Hi b...tches') } //I can also put a function in the object's attribute
console.log(obj1)
obj1.funcc()
console.log(lines)

//////////////////////////////

function Obj(name) { //creating a nem obj and its props, and also needing one input text
    this.nameOfThePerson = name // = this'Obj'.nameoftheperson = func argument, it's creating a new prop
    //in this case, THIS = OBJ1

    this.myFunc = () => {
            console.log(`Hello`)
        }
}


const Obj1 = new Obj('Hanna') // = create a new obj called Obj and import its props

console.log(Obj1)
console.log(Obj1.nameOfThePerson)
Obj1.myFunc()


