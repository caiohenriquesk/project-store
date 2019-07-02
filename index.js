const express = require("express");
const server = express();

server.get("", (req, res) => {
  return console.log("foi");
});

server.listen(3000);
