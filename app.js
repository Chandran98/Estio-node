const express = require("express");

const app = express();
app.get("/", (res, req) => {
  req.status(200).send("Madintron");
});

module.exports = app;
