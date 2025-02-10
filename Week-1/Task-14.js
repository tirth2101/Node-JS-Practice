// Create an object
let person = {
    name: "Tirth",
    age: 22,
    
    // Method to introduce the person
    introduce: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

// Call the introduce method
person.introduce();
