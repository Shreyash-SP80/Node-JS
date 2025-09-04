const http = require("http"); // Import the built-in HTTP module in Node.js

const name = "Shreyash"
http.createServer((req, res) => {
    // 'req' = request object (contains details about the client request: URL, method, headers, etc.)
    // 'res' = response object (used to send back data to the client/browser)

    // Option 1: You could set response headers like this (uncomment to use):
    // res.setHeader("Content-Type", "text/html");
    // This tells the browser: "Hey, I am sending HTML data."

    // Option 2: Common way to set headers and status code together:
    res.writeHead(200, { "Content-Type": "text/html" });
    // 200 = status code meaning "OK"
    // "Content-Type": "text/html" means the content is HTML, so browser renders it properly

    // Write (send) some HTML content to the response body
    res.write("<h1>Hello i am Shreyash</h1>");
    // Browser will display: Hello i am Shreyash (big heading)

    // End the response (very important!)
    // Without res.end(), the browser will keep waiting for more data

    // Adding multile things
    res.write(`
        <html>
            <head></head>
            <body>
                <form>
                    <lable for"name">Enter your name
                    <input type="text">
                    <br>
                    <input type="submit" value="submit">
                    <br>
                    <h2>Hello `+ name +`</h2>
                    <h2>Date: `+ new Date() +`</h2>
                </form>
            </body>
        </html>
    `)
    res.end();      
    // ✅ This tells Node.js: "I am done sending the response to the client."
    // - It finalizes the HTTP response.
    // - Without this, the browser would keep waiting (spinning/loading).
    // - After this, the client (browser) gets the complete response and closes the connection.

    process.exit()  
    // ❌ This FORCEFULLY stops the Node.js process (your server).
    // - As soon as this runs, the whole program exits.
    // - That means your server shuts down immediately and stops listening on port 4800.
    // - No further requests can be handled until you restart the server manually.
}).listen(4800); 
// listen(4800) means your server will run on port 4800
// You can open http://localhost:4800 in the browser to see the response
