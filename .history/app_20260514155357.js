const express = require("express");
const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send()
});

app.listen(8080, () => {
  console.log(`My app is running on port : ${PORT}`);
});
