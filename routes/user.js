const express = require("express");
const app = express()

const logger = require("../logger/logger");

const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

app.get("/users", (req, res) => {
  logger.info("users route");
  res.json(users);
});

app.get("/users/:userName", (req, res) => {
  logger.info("filter users by username::::"+req.params.userName);
  let user = users.filter((user) => {
    if (req.params.userName === user.userName) return user;
  });
  res.json(user);
});

app.post("/user", (req, res) => {
  users.push(req.body);
  res.json(users);
});

module.exports = app;