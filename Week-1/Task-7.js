// Function to demonstrate scoping
function scope() {
    if (true) {
        var functionScoped = "var"; // Function-scoped
        let blockScoped = "let"; // Block-scoped
        console.log(blockScoped); // Accessible inside the function
    }

    console.log(functionScoped); // Accessible outside the funtion (function-scoped)
}

scope();
