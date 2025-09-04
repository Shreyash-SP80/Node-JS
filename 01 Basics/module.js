// const fs = require("fs");
// const os = require("os");

// fs.writeFileSync("./Learning Node js/Basics/dummy.txt", "Trying with fs modules")

// console.log(os.platform())  // win32
// console.log(os.hostname())  // shreyash
// console.log(os.cpus())   // CPU 

// Core modules we have to import and global object we doesn't need to import

// console.log is an global object and there is no need to import it 
console.log("abc")
console.log(process.cwd())  // D:\Node JS
console.log(process.pid)    // Show an process id



const { log: hello, warn } = require('console');   // Destructuring of object
hello("This is hello")
warn("This is an worn")

