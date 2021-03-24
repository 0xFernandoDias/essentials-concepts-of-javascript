const showResult = function(note) {
    switch (Math.floor(note)) { // don't care about that, that means just a number
        case 10: case 9: // in that case
            console.log(`You the best!`)
            break //stop y'all
        case 8: case 7:
            console.log(`You did!`)
            break
        case 6: case 5: case 4:
            console.log(`You better study`)
            break
        case  3: case 2: case 1:
            console.log(`You missed...`)
            break
        default:
            console.log(`Invalid Number`)
    }
}

showResult(6)
showResult(10)
showResult(-67)