const http = require("http")
const color = require("colors")
const fs = require("fs")
const querystring = require("querystring")

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"})
                res.write("<h3 style='color:red;'>Server Error</h3>")
                res.end()
                return
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        })
    } else if (req.url === "/script.js") {
        fs.readFile("./script.js", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/plain"})
                res.end("File not found")
                return
            }
            res.writeHead(200, {"Content-Type": "application/javascript"})
            res.end(data)
        })
    } else if (req.url === "/submit") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("Submitted")

        let dataBody = []

        req.on('data',  (chunk) => {
            dataBody.push(chunk)
        })

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString()
            let readableData = querystring.parse(rawData)
            console.log(readableData);

            let message = "";

            if (readableData.Tasks == "Write") {
                fs.writeFileSync("./AllData/" + readableData.name + ".txt", readableData.data);
                message = "✅ Data written successfully";
            } else if (readableData.Tasks == "Read") {
                let dataString = fs.readFileSync("./AllData/" + readableData.name + ".txt", "utf-8");
                message = "📖 File Content: " + dataString;
            } else if (readableData.Tasks == "Update") {
                fs.appendFileSync("./AllData/" + readableData.name + ".txt", readableData.data);
                message = "✏️ Data updated successfully";
            } else if (readableData.Tasks == "Delete") {
                fs.unlinkSync("./AllData/" + readableData.name + ".txt");
                message = "🗑️ File deleted";
            } else {
                message = "⚠️ No valid task selected";
            }

        // 🔹 Now load index.html again and add the message at bottom
            fs.readFile("./index.html", "utf-8", (err, data) => {
                if (err) {
                    // res.writeHead(500, {"Content-Type": "text/html"});
                    res.end("<h3 style='color:red;'>Server Error</h3>");
                    return;
                }

                // res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data + `<h3 style="color:green; margin-top:20px;">${message}</h3>
                                <button onclick="window.location.href='/'">Go Back</button>`);
            });
        })
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("Not Found")
    }
}).listen(4800, () => {
    console.log("Server is running on: http://localhost:4800".green)
})