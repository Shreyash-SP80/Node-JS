
// Importing the built-in 'http' module of Node.js
// This module allows us to create an HTTP server.
const http = require("http")

// Create a server using http.createServer()
// This function takes a callback with two arguments: req (request) and res (response)
http.createServer((req, res) => {

    // res.write() sends data (as a response body) to the client.
    // You can write HTML, plain text, or JSON here.
    res.write("<h1>This is response from server</h1>")

    // res.end() is used to finish the response.
    // You can optionally send final data (like "Hello") with it.
    // Once res.end() is called, no more data can be sent for this request.
    res.end("Hello")

// .listen(4800) makes the server listen for requests on port 4800.
// A callback function is added here that runs once the server is successfully started.
}).listen(4800, () => {
    console.log("Server running on http://localhost:4800")
})


// From that we know that in same file we can create multiple servers
http.createServer((req, res) => {
    res.write("<h1>I am server 2</h1>")
    res.end("Ended")
}).listen(4900, () => {
    console.log("Server running on http://localhost:4900")
})