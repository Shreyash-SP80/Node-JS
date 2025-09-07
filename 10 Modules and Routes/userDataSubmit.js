const querystring = require("querystring")

function userDataSubmit(req, res) {
    res.write("Submitted")

    let dataBody = []
    req.on('data', (chunk) => {
        dataBody.push(chunk)
    })

    req.on('end', () => {
        let rawData = Buffer.concat(dataBody).toString()
        let readableData = querystring.parse(rawData)
        console.log(readableData)
        res.write('<h1 style="color:green;">Check Data</h1>');
        res.write("<h4>Name: " + readableData.username + "</h4>");
        res.write("<h4>Email: " + readableData.email + "</h4>");
        res.end(); 
    })
}

module.exports = userDataSubmit