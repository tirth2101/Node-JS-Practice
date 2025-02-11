// Constructor function for Car
function Car(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;

    // Display Car information
    this.displayInfo = function() {
        console.log(`Car: ${this.name}, Brand: ${this.brand}, Year: ${this.year}`);
    };
}

// Creating an instance of Car
const myCar = new Car("Model 488 Italia", "Ferrari", 2021);

// Calling the displayInfo method
myCar.displayInfo();
