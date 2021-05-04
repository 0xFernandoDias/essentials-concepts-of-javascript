const Hello = 'Helooo'

function exec() {
    const Hello = 'Heloooooooooo'
    return Hello
}
//Hello = 'Hello2' (we can just change the value when it is a variable)
console.log(Hello)
console.log(exec())
//the first console.log gets the first const outside the bracets, the exec func just gets the Hello const inside of it


const Costumer = {
    name: 'Joseph',
    age: 32,
    height: 90,
    details: {
        adrees: 'Broadway Avenue',
        number: 190
    }
}
//objects are nested groups of name / value pairs

