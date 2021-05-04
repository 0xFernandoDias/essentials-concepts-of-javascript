function Test(Input1, Input2, Input3){
    const firstToF = Input1 || Input2 || Input3 //OR, is one of these ones true? if yes than it's true
    const secondToF = Input1 && Input2 && Input3 //AND, is one of these ones false? if yes than it's false
    const thirdToF = Input1 != Input2 //are they different each other? if yes than it's true
    return {firstToF, secondToF, thirdToF}
}

console.log(Test(true, false, true))

console.log(Test(true, true, true))

console.log(Test(false, false, false))

