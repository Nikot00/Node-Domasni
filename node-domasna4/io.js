 //1. Local module for file write and read

const fs = require("fs").promises;

async function write(filename, data) {
   try {
    await fs.writeFile(filename, data)
    console.log("File Written successfully");
   } catch (err) {
    console.log('An error occurred');
    throw err;
   } 
}

async function read(filename) {
   try {
    const data = await fs.readFile(filename, "utf-8")
    return data;
   } catch (err) {
    console.log('An error occurred');
    throw err;
   }
}

async function append(filename, data) {
    try {
        await fs.appendFile(filename, data)
    } catch (err) {
        console.log("Append error");
        throw err;
    }
    
}

module.exports = {
    write,
    read,
    append
};