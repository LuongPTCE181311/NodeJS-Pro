const express = require("express");
const 
const app = express();

app.get("/", () => {
    return "hello world"
})

app.listen(8080, () => {
    console.log(`My app is running on port : ${}`);
    
})