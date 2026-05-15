import exx

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello ERic Update");
});

app.get("/abc", (req, res) => {
  res.send("Hello abc");
});