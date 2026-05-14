const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req) => {
  return "hello world";
});

app.listen(8080, () => {
  console.log(`My app is running on port : ${PORT}`);
});
