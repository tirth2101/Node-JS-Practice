function Array(arr, callback) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i])); 
    }
    return result; 
}

function double(num) {
    return num * 2;
}


const numbers = [1, 2, 3, 4, 5];
const modifiedNumbers = Array(numbers, double);

console.log(modifiedNumbers);
