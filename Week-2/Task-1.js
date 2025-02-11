// Closure
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); 

// Bind
function multiply(a, b) {
    return a * b;
}

const multiplyBy3 = multiply.bind(null, 2);
console.log(multiplyBy3(5)); 

