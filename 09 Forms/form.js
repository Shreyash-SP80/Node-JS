const http = require("http")
const color = require("colors")
const fs = require("fs")
const { buffer } = require("stream/consumers")
const querystring = require("querystring")

// Add an form directly into js
// http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" })
//     console.log(req.url)

    // if (req.url == "/") {
    //     res.write(` 
    //         <form method="post" action="/submit">
    //             <input type="text" placeholder="Enter your name">
    //             <input type="email" placeholder="Enter your email">
    //             <button>Submit</button>
    //         </form>    
    //     `)
    // }
    // else if (req.url == "/submit") {
    //     res.write('<h1>Data Submitted</h1>')
    // } 

//     res.end()
// }).listen(4800, () => {
//     console.log("Server is listening on: http://localhost:4800".green)
// })



// render form by index.html 
// http.createServer((req, res) => {
    
//     fs.readFile("./index.html", "utf-8", (err, data) => {
//         if (err) {
//             res.writeHead(500, {"content-type": "text/html"})
//             res.write("<h3 style='color:red;'>Internal Server Error</h3>")
//             res.end()
//             return
//         } 
//         res.writeHead(200, {"content-type": "text/html"})
//         if (req.url == "/") {
//             res.write(data)
//         }
//         else if (req.url == "/submit") {
//             res.write('<h1 style="color:green;">Data Submitted</h1>')
//         } 
//         res.end()
//     })
// }).listen(4800, () => {
//     console.log("Server is listening on: http://localhost:4800".green)
// })



// Access an data 
http.createServer((req, res) => {
    
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {"content-type": "text/html"})
            res.write("<h3 style='color:red;'>Internal Server Error</h3>")
            res.end()
            return
        } 
        res.writeHead(200, {"content-type": "text/html"})
        if (req.url == "/") {
            res.write(data)
        }
        else if (req.url == "/submit") {
            // let readableData;
            let dataBody = []; 
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            })

            req.on("end", () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = querystring.parse(rawData);
                console.log(readableData);

                let dataString = "My name is " + readableData.username + " and my email id id " + readableData.email;
                // console.log(dataString)

                
                // Storing data to file (sync way)
                // fs.writeFileSync("./textFiles/" + readableData.username + ".txt", dataString)
                // console.log("File created..")


                // Async way to create file
                fs.writeFile("./textFiles/" + readableData.username + ".txt", dataString, 'utf-8', (err) => {
                    if (err) {
                        res.end("Internal Server Error")   
                        return false
                    } else {
                        console.log("File created..")
                    }
                })



                res.write('<h1 style="color:green;">Data Submitted</h1>');
                res.write("<h4>Name: " + readableData.username + "</h4>");
                res.write("<h4>Email: " + readableData.email + "</h4>");
                res.end(); // ✅ response ends here
            });
            // res.write('<h1 style="color:green;">Data Submitted</h1>')
            // res.write("<h4>Name: " + readableData.username + "</h4>")
            // res.write("<h4>Email: " + readableData.email + "</h4>")
        } 
    })
}).listen(4800, () => {
    console.log("Server is listening on: http://localhost:4800".green)
})