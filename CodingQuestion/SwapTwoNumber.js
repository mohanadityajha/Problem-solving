function swapTwoNumber(a, b) {
    a = a - b;
    b = a + b;
    a = b - a;
    return (`${a} and ${b}`)
}
console.log(swapTwoNumber(10, 20))