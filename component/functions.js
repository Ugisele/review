function cutFruit(fruit) {
    return fruit * 4
    
}
function fruitProcessing(apple,orange) {
    const appleProcess = cutFruit(apple)
    const orangeProcess = cutFruit(orange)

    const juice = `juice with ${appleProcess} and ${orangeProcess} will be to sweet`
    
}

console.log(fruitProcessing(2,3));