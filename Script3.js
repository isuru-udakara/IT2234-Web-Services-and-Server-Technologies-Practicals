const fs = require('fs').promises;
const readFile= async() => {
    try{
        const [data, data1]= await Promise.allSettled([
            fs.readFile("read.txt", "utf-8"),
            fs.readFile("data.txt", "utf-8")
        ]);
        console.log(data.value);
        console.log(data1.value);
        console.log(data.status);
        console.log(data1.status);
    }catch(err){
        console.error(err);
    }
}
readFile();