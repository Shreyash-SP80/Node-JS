const arg = process.argv;

// console.log("------ ", arg[2], arg[3], arg[4])

const http = require("http")

http.createServer((req, res) => {
    res.write("Testing input")
    res.end()
}).listen(arg[2])   // for dynamic port i can pass form command line