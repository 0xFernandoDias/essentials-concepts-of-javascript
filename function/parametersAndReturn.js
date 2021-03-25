const calcArea = function(width, height){
    const area = width * height
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(calcArea(2, 2))
console.log(calcArea(5, 5))