const express = require("express");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hello Chat!",
    user: "Dave",
    added: new Date(),
  },
  {
    text: "What's up cuz",
    user: "Leroy",
    added: new Date(),
  },
  {
    text: "Wassum",
    user: "Jordan",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini MessageBoard", messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Add New Message" });
});

indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;