// Eg. 1 - Hoisting with var
console.log(varVariable); 
var varVariable = "declared using var";
console.log(varVariable); 

// Eg. 2 - Hoisting with let
let letVariable = "declared using let";
console.log(letVariable);

// Eg. 3 - Function Hoisting
hoistedFunction(); 

function hoistedFunction() {
    console.log("hoisted function");
}

// Eg. 4 - Hoisting within a function
function testHoisting() {
    console.log(innerVar); 
    var innerVar = "Inside function";

    let innerLet = "Inside function with let";
    
    console.log(innerVar); 
    console.log(innerLet); 
}
testHoisting();

// Eg. 5 - Hoisting within a block
{
    var blockVar = "Inside block with var";
    
    let blockLet = "Inside block with let";

    console.log(blockVar); 
    console.log(blockLet); 
}

console.log(blockVar);
