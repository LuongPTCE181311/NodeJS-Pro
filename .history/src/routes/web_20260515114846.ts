import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

router.get("/abc", (req, res) => {
  res.send("Hello abc");
});