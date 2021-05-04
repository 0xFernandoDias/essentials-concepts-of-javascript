const Obj = {
    name: 'Fernando',
    nickname: 'Nando',
    address: 'Virgilio Street, 1685'
}

function concatText({name, address}, text, a, b){
    const stringg = `Hello ${name}, do you live in ${address} right?! ${text}!`
    const sum = a+b
    console.log(stringg)
    console.log(`It's equal ${sum}`)
}

concatText(Obj, 'Good to see ya', 10, 15)
