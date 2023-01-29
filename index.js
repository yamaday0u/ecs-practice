const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const logger = require("./logger/logger");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  logger.info("default route");
  res.send("App works!");
});

app.use("/api", require("./routes/routes"));

app.get("*", (req, res) => {
  logger.info("users route");
  res.send("undefined route");
});

app.listen(port, error => {
  logger.info("running server on from port::::::" + port);
});
