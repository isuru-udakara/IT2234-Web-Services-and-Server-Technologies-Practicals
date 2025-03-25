const express= require("express");
const app= express();
const port= 3002;

const students= require('./DB/Students.js');

app.get('/', (req, res)=>{
    res.send("Hello Express JS");
});

app.get('/msg', (req, res)=>{
    res.send("It's me your friendly neighbourhood");
});

app.get('/stu', (req, res) => {
    res.send(students);
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});