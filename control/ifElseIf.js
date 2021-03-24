Number.prototype.between = function notAnno(startt, endd) { // Number is the note, that it's like: note = new Between()
    return this >= startt && this <= endd // only thing that we gotta care is IF it's true! ( THIS ===== NOTE)
}

const showResult = function (note) {
    if(note.between(9, 10) ) { // IF THAT'S TRUEEE LIKE = (8, 9, 10), (9)
        console.log(`You the best!`) // if a put a number 7 for example, is 7 >= 9 and <= 10????? No! so.. we go to the next line
    } else // = so...
    if(note.between(7, 8.99) ){
        console.log(`You did!`)
    } else
    if(note.between(4, 6.99) ){
        console.log(`You missed from a little piece.. you gotta study!`)
    } else
    if(note.between(0, 3.99) ) {
        console.log('You fail')
    } else {
        console.log(`Invalid number`)
    }
}

showResult(9.5)
showResult(8)
showResult(4.5)
showResult(2)
showResult(-3)

//////////////////////////////

console.log(typeof Number.prototype.between)
console.log(typeof Number.prototype)

console.log(Number.prototype.between)
console.log(Number.prototype)
