const express= require("express");
// app object represents Express application and will be used to define routes and configure the server.
const app = express();
// server will listen on port 3001
const port = 3001;

// When a client makes a GET request to /, the server responds with the text
app.get('/', (req, res)=>{
    res.send("Hello Express JS");
});