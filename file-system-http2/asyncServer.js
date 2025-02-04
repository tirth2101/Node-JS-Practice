const http = require("http");
const fs = require("fs");

const filePath = "./data.json";
const PORT = 4000;

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
        if (err) console.error("Error writing file:", err);
        callback();
    });
};

// Create HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/users") {
        readFile((data) => res.end(JSON.stringify(data)));

    } else if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            readFile((data) => {
                let newUser = { id: data.length + 1, ...JSON.parse(body) };
                data.push(newUser);
                writeFile(data, () => res.end(JSON.stringify({ message: "User added", newUser })));
            });
        });

    } else if (req.method === "PUT" && req.url.startsWith("/users/")) {
        let id = parseInt(req.url.split("/")[2]);
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            readFile((data) => {
                let index = data.findIndex(user => user.id === id);
                if (index !== -1) {
                    data[index] = { ...data[index], ...JSON.parse(body) };
                    writeFile(data, () => res.end(JSON.stringify({ message: "User updated", user: data[index] })));
                } else {
                    res.statusCode = 404;
                    res.end(JSON.stringify({ message: "User not found" }));
                }
            });
        });

    } else if (req.method === "DELETE" && req.url.startsWith("/users/")) {
        let id = parseInt(req.url.split("/")[2]);
        readFile((data) => {
            let newData = data.filter(user => user.id !== id);
            writeFile(newData, () => res.end(JSON.stringify({ message: "User deleted" })));
        });

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// Start Server
server.listen(PORT, () => {
    console.log(`Asynchronous Server running at http://localhost:${PORT}`);
});
