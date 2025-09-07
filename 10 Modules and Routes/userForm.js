

function  userForm(req, res) {
    res.write(`
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email">
            <button type="submit">Submit</button>
        </form>   
    `)
}

module.exports = userForm