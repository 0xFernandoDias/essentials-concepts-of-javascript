class Launch {
    constructor(name, value){
        this.name = name
        this.value = value
    }
}

//METHOD
class financialCycle {
    constructor(mm, yy){
        this.month = mm
        this.year = yy
        this.launch = []
    }
    addLaunch(...launch){ // THIS IS METHOD
        launch.forEach(l => this.launch.push(l))
    
    }
}

const obj1 = new Launch('Fernando', 10)
console.log(obj1)

const obj2 = new financialCycle(01, 2000) // first I pass a class to  a const
obj2.addLaunch(20, 'a') // then I acces a function inside the obj, I pass arguments, it makes the arguments goin to array and store itself there
console.log(obj2)