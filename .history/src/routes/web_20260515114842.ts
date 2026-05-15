import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

app.get("/abc", (req, res) => {
  res.send("Hello abc");
});