const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;
const filePath = "./data.json";

app.use(cors());
app.use(bodyParser.json());

// Read file asynchronously
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

// Write file asynchronously
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

// GET - Read all users
app.get("/users", (req, res) => {
    readFile((data) => {
        res.json(data);
    });
});

// POST - Create a new user
app.post("/users", (req, res) => {
    readFile((data) => {
        let newUser = { id: data.length + 1, ...req.body };
        data.push(newUser);
        writeFile(data, () => res.json({ message: "User added", newUser }));
    });
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
    readFile((data) => {
        let index = data.findIndex(user => user.id == req.params.id);
        if (index !== -1) {
            data[index] = { ...data[index], ...req.body };
            writeFile(data, () => res.json({ message: "User updated", user: data[index] }));
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
    readFile((data) => {
        let newData = data.filter(user => user.id != req.params.id);
        if (newData.length !== data.length) {
            writeFile(newData, () => res.json({ message: "User deleted" }));
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Asynchronous Server running at http://localhost:${PORT}`);
});
