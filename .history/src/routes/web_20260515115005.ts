import express from 'express'

const router = express.Router();

const web

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

router.get("/abc", (req, res) => {
  res.send("Hello abc");
});

