const fs = require("fs");

// File path
const filePath = "./data.json";

// Read data from file (Async)
const readFile = (callback) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    });
};

// Write data to file (Async)
const writeFile = (data, callback) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("Data updated successfully!");
        }
        callback();
    });
};

// CREATE (Async)
const create = (name, role) => {
    readFile((data) => {
        let newUser = { id: data.length + 1, name, role };
        data.push(newUser);
        writeFile(data, () => console.log("User added:", newUser));
    });
};

// READ (Async)
const read = () => {
    readFile((data) => {
        console.log("Users:", data);
    });
};

// UPDATE (Async)
const update = (id, updatedData) => {
    readFile((data) => {
        let index = data.findIndex(user => user.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...updatedData };
            writeFile(data, () => console.log("User updated:", data[index]));
        } else {
            console.log("User not found!");
        }
    });
};

// DELETE (Async)
const deleteData = (id) => {
    readFile((data) => {
        let newData = data.filter(user => user.id !== id);
        writeFile(newData, () => console.log("User deleted successfully."));
    });
};

// Test the functions
console.log("Asynchronous CRUD Operations:");
create("Devansh", "Manager");
setTimeout(read, 1000);
setTimeout(() => update(1, { role: "Tech Lead" }), 2000);
setTimeout(() => deleteData(3), 3000);
setTimeout(read, 4000);
