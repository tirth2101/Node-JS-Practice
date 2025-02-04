const http = require("http");
const fs = require("fs");

const filePath = "./data.json";
const PORT = 3000;

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
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

// Create HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/users") {
        res.end(JSON.stringify(readFile()));

    } else if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            let data = readFile();
            let newUser = { id: data.length + 1, ...JSON.parse(body) };
            data.push(newUser);
            writeFile(data);
            res.end(JSON.stringify({ message: "User added", newUser }));
        });

    } else if (req.method === "PUT" && req.url.startsWith("/users/")) {
        let id = parseInt(req.url.split("/")[2]);
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            let data = readFile();
            let index = data.findIndex(user => user.id === id);
            if (index !== -1) {
                data[index] = { ...data[index], ...JSON.parse(body) };
                writeFile(data);
                res.end(JSON.stringify({ message: "User updated", user: data[index] }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "User not found" }));
            }
        });

    } else if (req.method === "DELETE" && req.url.startsWith("/users/")) {
        let id = parseInt(req.url.split("/")[2]);
        let data = readFile();
        let newData = data.filter(user => user.id !== id);
        writeFile(newData);
        res.end(JSON.stringify({ message: "User deleted" }));

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// Start Server
server.listen(PORT, () => {
    console.log(`Synchronous Server running at http://localhost:${PORT}`);
});
