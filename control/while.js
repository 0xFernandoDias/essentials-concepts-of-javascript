function getRandomIntBetw(min, max){ // put what numbers you want to work between start and end
    const value = Math.random() * (max - min) + min // random number between the props and pass it to the const
    return Math.floor(value) // round the number down and store the result, put the value const outside too
}

let option = -1 // we gotta put != of -1 if we want to see that running :D

while(option != -1){ // while option been different from -1 do that! 
    option = getRandomIntBetw(-1, 10) // = value
    console.log(`A opção escolhida foi ${option}.`)
}

console.log(`See ya`)