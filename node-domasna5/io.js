const fs = require("fs").promises;

async function write(filename, data) {
   try {
    await fs.writeFile(filename,  JSON.stringify(data,))
    console.log("File Written successfully");
   } catch (err) {
    console.log('An error occurred');
    throw err;
   } 
}

async function read(filename) {
   try {
    const data = await fs.readFile(filename, "utf-8")
    return JSON.parse(data);
   } catch (err) {
    console.log('An error occurred');
    throw err;
   }
}


module.exports = {
    write,
    read
};