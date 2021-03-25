function getRandomIntBetw(min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandomIntBetw(-1, 10)
    console.log(`You choosed ${option}.`)
} while(option != -1)

console.log(`See ya`)
