const value = 'Global'

function myFunction () {
    console.log(value)
}

function exec(){
    const value = 'Local'
    myFunction() // it will find the global const because inside of the function it does it
}

exec()

