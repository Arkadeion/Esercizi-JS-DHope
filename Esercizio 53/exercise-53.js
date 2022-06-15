function sum(...inputs) {
    let sumNumbers = 0;
    for (let input of inputs) {
        sumNumbers += input;
    }
    return sumNumbers;
}

console.log(sum(1, 2, 3, 4, 5));