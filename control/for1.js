let counter = 1
while (counter <= 10){
    console.log(`the counter is: ${counter}`)
    counter++
}
console.log(`it's done`)


for(let i = 1; i <= 10; i++) { // var i = 1; "let is the best way because we must use the i again",, while i <= 10 DO i++
    console.log(`i = ${i}`)
}
console.log(`okay`)

//////////////////////////////

const notes = [6, 7, 8, 9, 4]
for(let i = 0; i < notes.length; i++){ // i=0, while i < notes.length "5", i+1
    console.log(`note = ${notes[i]}`) // note = 6, note = 7, note = 8
}
