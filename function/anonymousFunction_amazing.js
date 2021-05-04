const sum = (a, b) => a+b
const showResult = (c, d, operation = sum) => { // if the 3th prop been undefined it will be sum()
    console.log(sum(c, d))
}
showResult(1, 2) // =3

const person = {
    name: 'Bin Loc',
    speak() {console.log('Wassgud?!')}
}
person.speak()

