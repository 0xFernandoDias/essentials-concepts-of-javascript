const notes = [5, 8, 4, 6, 8.5, 6.3, 2.2]

//no callback
let lowNotes = []
let highNotes = []

for (let i in notes) { // for each value in [notes], do it
    if (notes[i] < 7) {
        lowNotes.push(notes[i]) // if the value be less than 7 put it in lowNotes variable
    }
}
for (let i in notes) {
    if (notes[i] >= 7){
        highNotes.push(notes[i])
    }
}
console.log(lowNotes, highNotes)


// with callback
// we will create an array
const lowNotes2 = notes.filter( // filter all values in Notes and exec a function in each one of them
    function (i) { // annonymous func
        return i < 7 // return and store the number in the var when the index number been less than seven
    }
)
console.log(lowNotes2)

//or
const lowNotes3 = notes.filter(
    (i) => i < 7
)
console.log(lowNotes3)


