const obj1 = {}
console.log(obj1)
console.log(typeof Object, typeof new Object) // function, object
const obj2 = new Object
console.log(typeof obj2)

// constructor function
function Product (name, price, desc){
    this.name = name
    this.getDesc = () => {
        return price * (1 - desc)
    }
}
const smartPhone = new Product('Galaxy s21+', 2000.00, 0.15)
console.log(smartPhone)
console.log(smartPhone.getDesc())

// factory function BEST WAY
function createWorker(name, wage, faults){
    return {
        name,
        wage,
        faults,
        getWage(){
            return (wage/30) * (30 - faults) 
        }
    }
}
const wo1 = createWorker('Nando', 1700, 1)
console.log(wo1)
console.log(wo1.getWage()) // 1643.33

// Object.create
const daughter = Object.create(null) // const daughter = {}
daughter.name = 'Ana'
console.log(daughter)

// a famous function that returns an obj
const fromJson = JSON.parse(`{"info": "I'm a JSON"}`) // = { info: "i'm a Json"}, it turns the JSON to an object
console.log(fromJson.info) // I'm a JSON