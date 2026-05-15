// const express = require("express");
import express from "express";
reqi
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Update");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

app.listen(PORT, () => {
  console.log(`My app is running on port : ${PORT}`);
  console.log("env port: ", process.env.PORT);
});
