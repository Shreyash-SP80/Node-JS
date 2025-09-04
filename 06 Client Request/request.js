const http = require("http")
const color = require("colors")

http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.headers.host)
    console.log(req.method)

    res.setHeader("Content-Type", "text/html");
    if (req.url == "/") {
        res.write("<h1>This is home page</h1>")
    }
    else if (req.url == "/login") {
        res.write("<h1>This is Login page</h1>")
    } else {
        res.write("Other page")
    }
    res.end();
}).listen(4800, () => {
    console.log("Server is listining on http://localhost:4800".green)
})