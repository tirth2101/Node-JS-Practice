// Constructor function for Person
function Person(name, age) {
    this.name = name; // Assign name property
    this.age = age;   // Assign age property
}

// Add greet method to the prototype
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Create two Person objects
let person1 = new Person("Tirth", 22);
let person2 = new Person("Naman", 22);

person1.greet(); 
person2.greet(); 
