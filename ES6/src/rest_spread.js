
// ARGUMENTS
function addition() {
    let sum = 0

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
}

// REST
function sumWithRest(...numbers) {
    const sum = numbers.reduce((result, index) => {
        result += index;
        return result;
    }, 0)
    return sum;
}

console.log(sumWithRest(10, 20, 30));