// Car Constructor
function Car(brand) {
    this.brand = brand; 

    // Use nested object property to create object
    this.carInfo = {
        displayInfo: function(model) {
            console.log("Car brand: " + this.brand + ", Model: " + model);
        }.bind(this) 
    };
}

// Instantiate Car object
let myCar = new Car("Hyundai");

// Call the displayInfo method with a model parameter
myCar.carInfo.displayInfo("Creta");
