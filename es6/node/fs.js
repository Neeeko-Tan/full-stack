const fs = require('fs');
const content = fs.readFileSync('./text.txt', "utf8");
console.log(content);

fs.readFile('./text.txt', "utf8", (error, data) => {
    console.log(data);
})
fs.writeFileSync("./text.txt", "hello again");