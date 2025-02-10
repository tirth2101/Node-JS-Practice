// Create object
let Person = {
    name: "Tirth",
    age: 22,
    hobbies: ["Reading", "Traveling", "Football", "Piano"]
};

// Shallow copy 
let shallowCopyPerson = { ...Person };

// Deep copy
let deepCopyPerson = JSON.parse(JSON.stringify(Person));

// Modify the hobbies array in shallowCopyPerson
shallowCopyPerson.hobbies.push("Athletics");

console.log("Original Person:", Person);
console.log("Shallow Copy Person:", shallowCopyPerson);
console.log("Deep Copy Person:", deepCopyPerson);
