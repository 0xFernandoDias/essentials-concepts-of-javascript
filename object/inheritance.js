// inheritance
const grandFather = { attr1:  'A'}
const father = {
    __proto__: grandFather,
    attr2: 'B'
}
const son = {
    __proto__: father,
    attr3: 'C'
}
console.log(son.attr1, son.attr2)

//////////

const car = {
    currentSpeed: 0,
    maxSpeed: 200,
    accelerateMore (delta) {
        if (this.currentSpeed + delta <= this.maxSpeed){
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed
        }
    },
    status () {
        return `${this.currentSpeed}Km/h de ${this.maxSpeed}Km/h`
    }
}

const ferrari = {
    model: 'California',
    maxSpeed: 325 // shadowing
}

const bmw = {
    model: 'i8',
    status () {
        return `${this.model}: ${super.status()}` // i8: 100Km/h de 200Km/h
    }
}

Object.setPrototypeOf(ferrari, car) // obj, car is the father, car is the proto
console.log(ferrari.currentSpeed) // 0

Object.setPrototypeOf(bmw, car)
bmw.accelerateMore(100)
console.log(bmw.status())

ferrari.accelerateMore(110)
console.log(ferrari.status())