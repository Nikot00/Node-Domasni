const { write, read, append } = require("./io.js");

// 2. use append to append data and then read the new data appended

async function main() {
    try {
         await write("data.txt", "Hello")

         await append("data.txt", "\n This is the new appended data")

         // 3. Read new data when change has been made with the append
         const data = await read("data.txt");


    } catch (err) {
        console.log('An error occured');
        console.log(data);
        
    }

}

main()
