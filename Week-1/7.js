// Function to show scoping
function scope() {
    if (true) {
        var functionScoped = "var"; // Function-scoped
        let blockScoped = "let"; // Block-scoped
        console.log(blockScoped); // Accessible inside the block
    }

    console.log(functionScoped); // Accessible outside the block (function-scoped)
}

scope();
