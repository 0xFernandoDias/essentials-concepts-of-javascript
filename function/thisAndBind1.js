const person = {
    greeting: 'Hello',
    speak(){
        console.log(this.greeting) // = person.greeting
    },
    name: 'Luka'
}
const person2 = {
    greeting: 'Good morning'
}

person.speak() // = Hello

const speak = person.speak
speak() // that will be undefined because we ain't got no THIS

const speakWithPerson = person.speak.bind(person2) // that means... use the function "speak" inside the "person" object and put the "person2 as the object", person2 will be the THIS
speakWithPerson()