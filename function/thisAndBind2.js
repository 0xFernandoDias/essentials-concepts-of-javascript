const setAge = function () {
    this.age = 21

    setInterval (function () { // the function will be called every second
    this.age++
    console.log(this.age)
    }.bind(this), 1000) // 1 sec
}

new setAge