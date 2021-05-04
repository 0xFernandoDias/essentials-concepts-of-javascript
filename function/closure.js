/* closure is the scope created when a function is declared
this scope allows the function to access and manipulate variables external to the function */

const value = 'Global'

function outside(){
    const value = 'Local'
    function inside(){
        return value // = 'Local'
    }
    return inside // = Local
}

const myFunc = outside()
console.log(myFunc())