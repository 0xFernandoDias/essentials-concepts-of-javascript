const automaker = ['Audi', 'BMW', 'Mercedes']

function showIt(name, index){
    console.log(`${index + 1}. ${name}`)
}

automaker.forEach(showIt)