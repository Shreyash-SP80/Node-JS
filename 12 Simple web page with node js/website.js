
const http = require("http")
const color = require("colors")
const fs = require("fs")

http.createServer((req, res) => {
    // res.write("Page check")

    let navData = fs.readFileSync("html/navbar.html", 'utf-8')

    let file = '/home'
    if (req.url != '/') {
        file = req.url
    }

    if (req.url != '/style.css') {
        fs.readFile("html/" +file + ".html", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text/html"})
                res.write("<h1 style='color:red;'>Internal server error</h1>")
                res.end()
                return false
            }
            res.writeHead(200, {"content-type": "text/html"})
            res.write(navData +""+ data)
            res.end()

        })
    } else if (req.url == '/style.css') {
         fs.readFile("html/style.css", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text/css"})
                res.write("<h1 style='color:red;'>Internal server error</h1>")
                res.end()
                return false
            }
            res.writeHead(200, {"content-type": "text/css"})
            res.end(data)

        })
    }   
}).listen(4800, () => {
    console.log("Server is running on: http://localhost:4800".green)
})