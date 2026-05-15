// const express = require("express");
import express from "express";
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

//config view engine
app.set('view engine', 'ejs');
app.set('views', )

app.get("/", (req, res) => {
  res.send(`<h1 style="color: red">Hello World Update</h1>`);
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

app.listen(PORT, () => {
  console.log(`My app is running on port : ${PORT}`);
  console.log("env port: ", process.env.PORT);
});
