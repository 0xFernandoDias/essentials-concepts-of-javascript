const cFirstTest = firstTest = (note) => {
    if (note >= 7) {
        console.log(`You passed! Your note is ${note} !`)
    }
}
cFirstTest(9)
cFirstTest(6) // It doesn't showing anything

//////////////////////////////

const ifTrueIdo = (value) => { // DO NOT FORGOT TO MAKE A FUNC FIRST
    if(value){
        console.log(`That's true! ${value}`)
    } else {
        console.log(`You missed...`)
    }
}

ifTrueIdo(80) // this is true
ifTrueIdo(false)
