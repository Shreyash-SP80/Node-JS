const http = require("http")

const userData = [
    {
        name: "Shreyash",
        age: 19,
        email: "shreyash@gmail.com"
    },
    {
        name: "ABC",
        age: 20,
        email: "abc@gmail.com"
    },
    {
        name: "XYS",
        age: 21,
        email: "xys@gmail.com"
    }
]

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData))
    res.end()
}).listen(4800)