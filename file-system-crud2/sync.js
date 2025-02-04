const fs = require("fs");

// File path
const filePath = "./data.json";

// Read data from file (Sync)
const readFile = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
};

// Write data to file (Sync)
const writeFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log("Data updated successfully!");
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

// CREATE (Sync)
const create = (name, role) => {
    let data = readFile();
    let newUser = { id: data.length + 1, name, role };
    data.push(newUser);
    writeFile(data);
    console.log("User added:", newUser);
};

// READ (Sync)
const read = () => {
    let data = readFile();
    console.log("Users:", data);
};

// UPDATE (Sync)
const update = (id, updatedData) => {
    let data = readFile();
    let index = data.findIndex(user => user.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedData };
        writeFile(data);
        console.log("User updated:", data[index]);
    } else {
        console.log("User not found!");
    }
};

// DELETE (Sync)
const deleteData = (id) => {
    let data = readFile();
    let newData = data.filter(user => user.id !== id);
    writeFile(newData);
    console.log("User deleted successfully.");
};

// Test the functions
console.log("Synchronous CRUD Operations:");
create("Tirth", "Developer");
create("Dhyan", "Designer");
read();
update(1, { role: "Senior Developer" });
deleteData(2);
read();
