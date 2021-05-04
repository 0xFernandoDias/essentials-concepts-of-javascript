let double = function (num) {
    return num * 2
}

double2 = (num) => {
    return num * 2
}

double3 = num => num * 2 // implict return

const opt4 = double = num => num * 2 // I can still store the arrow function in a variable

const opt5 = (num) => num * 2 // const opt5 = () => { }



console.log(
    double(2),
    double2(4),
    double3(6),
    opt4(8),
    opt5(10)
)