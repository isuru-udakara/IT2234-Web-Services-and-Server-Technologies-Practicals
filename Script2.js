// reading file using promises
const fs = require('fs').promises;
const readFile = (filepath) => {
    return fs.readFile(filepath, "utf-8"); // returns a promise
}
readFile("file.txt").then((data) => {
    console.log(data); 
}).catch((err) => {
    console.error(err);
});