// Eg. 1 - Function Scope vs Block Scope

function scopeTest() {
    if (true) {
        var x = "var"; // Function-scoped
        let y = "let"; // Block-scoped
        const z = "const"; // Block-scoped
    }
    console.log(x); // Accessible (var is function-scoped)
}

scopeTest();

// Eg. 2 - Redeclaration and Reassignment

var a = 10;
var a = 20; // Allowed: var can be redeclared

let b = 30; 

const c = 50; 

console.log(a); 
console.log(b); 
console.log(c); 

// Eg. 3 - Hoisting Behavior
console.log(hoistedVar); 
var hoistedVar = "Hoisted with var";

let hoistedLet = "Hoisted with let";

const hoistedConst = "Hoisted with const";
