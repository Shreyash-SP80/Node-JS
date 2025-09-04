
const http = require("http")
const colors = require("colors")   // install npm i colors (Package to add coloring in the console text)

http.createServer((req, res) => {
    res.write("<h1>This is an server</h1>")
    res.end("Ended")
}).listen(4900, () => {
    // console.log(colors.green("Server running on http://localhost:4900"))
    console.log("Server running on http://localhost:4900".underline.green)
})