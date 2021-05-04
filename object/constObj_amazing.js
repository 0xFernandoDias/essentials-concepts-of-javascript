// person -> memory address like 00000001 -> {...}
// NOW I UNDERSTOOD THE CONSTRUCTOR FUNCTION
const person = {
    name:'Joshua'
}

person.name = 'Pedro'
console.log(person) // { name: 'Pedro' }


//CAUTION, WE CAN NOT REFERENCE ANOTHER MEMORY ADDRESS TO THE SAME CONST, BECAUSE THAT IS A CONST! I JUST CAN CHANGE THE PROPS VALUE OR PUSH MORE
//NEVER -> person another memory address 00000002 -> {...}
/*
person = { name: 'Hanna'}
console.log(person) */

Object.freeze(person) // here we are freezing the object for it doesn't get annothers changes // turn the object literally a const
person.name = 'Mary'
console.log(person) // it doesn't cause an error, but the name: 'Pedro' didn't change

