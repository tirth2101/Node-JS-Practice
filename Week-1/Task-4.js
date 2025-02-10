//Task-4
// Eg. 1 - Function Scope vs Block Scope
function scopeTest() {
    if (true) {
        var x = "var"; // Function-scoped
        let y = "let"; // Block-scoped
        const z = "const"; // Block-scoped
    }
    console.log(x); // Accessible (var is function-scoped, so it is accessible from outside the function)
    
    // console.log(y); // Error: y is not defined (let is block-scoped)
    // console.log(z); // Error: z is not defined (const is block-scoped)
}

scopeTest();

// Eg. 2 - Redeclaration and Reassignment

var a = 10;
var a = 20; // Allowed: var can be redeclared

let b = 30;
// let b = 40; // Error: let cannot be redeclared in the same scope

const c = 50;
// c = 60; // Error: const cannot be reassigned

console.log(a); // 20
console.log(b); // 30
console.log(c); // 50

// Example 3: Hoisting Behavior

console.log(hoistedVar); // Undefined (var is hoisted)
var hoistedVar = "Var used for Hoisting";

let hoistedLet = "let used for Hoisting"; // console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization

const hoistedConst = "const used for Hoisting"; // console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
