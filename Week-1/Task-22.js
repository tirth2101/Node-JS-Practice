// Create object
let student = {
    name: "Tirth",
    age: 22,
    grades: [85, 90, 78, 92, 88],

    // Calculate avg grades
    calculateAverage: function() {
        let sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
};

for (let key in student) {
    if (typeof student[key] !== "function") {
        console.log(key + ": " + student[key]);
    }
}

// Call the calculateAverage method 
console.log("Average Grade:", student.calculateAverage());
