// const express = require("express");
import express from "express";
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Updatye ");
});

app.listen(8080, () => {
  console.log(`My app is running on port : ${PORT}`);
});
