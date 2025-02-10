// Define calculator object
const calculator = {
    x: 10,
    y: 4,

    // calculations
    calculate: function(operation) {
        // Arrow function
        const performOperation = () => {
            if (operation === "add") return this.x + this.y;
            if (operation === "subtract") return this.x - this.y;
            if (operation === "multiply") return this.x * this.y;
            if (operation === "divide") return this.y !== 0 ? this.x / this.y : "Cannot divide by zero";
        };

        return performOperation();
    }
};

// Test the calculator with different operations
console.log("Addition:", calculator.calculate("add")); 
console.log("Subtraction:", calculator.calculate("subtract")); 
console.log("Multiplication:", calculator.calculate("multiply")); 
console.log("Division:", calculator.calculate("divide")); 
