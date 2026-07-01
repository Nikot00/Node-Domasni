const { hello } = require("./hello")
const chalk = require("chalk");
const fs = require("fs")

//1. write file with fs -> core module

fs.writeFile("data.txt", "Hello World", (err) => {
    if(err) {
        console.log("An error occured");
    } else {
        console.log("File Writen Successfully"); 
    }
})



//2. make a function in another file (Hello world) and use it in another file -> local module

hello()


// 3. find any package(module) on npmjs.com and use it -> third party modules

const username = "Nikola"
const password = "1234"

if(username === "Nikola" && password === "1234") {
    console.log(chalk.green.bold("Login successfull"));
    console.log(chalk.blue(`Welcome ${username}`));
} else {
    console.log(chalk.red.bold("X invalid username or password"));
}