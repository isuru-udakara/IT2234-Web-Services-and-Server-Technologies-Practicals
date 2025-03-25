const express= require("express");
const app= express();
const port= 3002;

app.get('/', (req, res)=>{
    res.send("Hello Express JS");
});

app.get('/msg', (req, res)=>{
    res.send("It's me your friendly neighbourhood");
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});