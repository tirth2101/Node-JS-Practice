const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const filePath = "./data.json";

app.use(cors());
app.use(bodyParser.json());

// Read file synchronously
const readFile = () => {
    try {
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
};

// Write file synchronously
const writeFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log("Data updated successfully!");
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

// GET - Read all users
app.get("/users", (req, res) => {
    res.json(readFile());
});

// POST - Create a new user
app.post("/users", (req, res) => {
    let data = readFile();
    let newUser = { id: data.length + 1, ...req.body };
    data.push(newUser);
    writeFile(data);
    res.json({ message: "User added", newUser });
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
    let data = readFile();
    let index = data.findIndex(user => user.id == req.params.id);
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeFile(data);
        res.json({ message: "User updated", user: data[index] });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
    let data = readFile();
    let newData = data.filter(user => user.id != req.params.id);
    if (newData.length !== data.length) {
        writeFile(newData);
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Synchronous Server running at http://localhost:${PORT}`);
});
