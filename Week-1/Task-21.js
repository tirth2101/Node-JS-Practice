// Create objects
let user1 = {
    name: "Tirth",
    age: 22
};

let user2 = {
    name: "Dev",
    age: 23
};

// Compare Objects
function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Check if both objects have the same number of properties
    if (keys1.length !== keys2.length) {
        console.log("Objects are not equal.");
        return;
    }

    // Check if all properties and values are the same
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            console.log("Objects are not equal.");
            return;
        }
    }

    console.log("Objects are equal.");
}

// Test the function with user1 and user2
compareObjects(user1, user2);
