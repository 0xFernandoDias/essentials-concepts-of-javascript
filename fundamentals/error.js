function solverError(theError){
    throw `It didn't work` //it's just an error message
}

function cap(obj){
    try { // tente
        console.log(`${obj.name.toUpperCase()} !!!`)
    } catch(e) { // if that did not work, do it... (e) means 'error' event, it stored the error in e
        solverError(e)
    } finally {
        console.log(`It's done!`)
    }
}

const person = {
    nome: 'Fernando', //if I wrote a wrong prop it will show a error message and the solverError() will be called
    age: 21
}
cap(person)