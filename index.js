const express = require("express");
const server = express();

const projetos = ["teste 1", "teste 2", "teste 3"];

server.post("/projects", (req, res) => {
  const { id } = req.params;
  const { title } = req.params;
  console.log(id);
  console.log(title);
  return res.json(projetos);
});

server.get("/projects", (req, res) => {
  return res.json(projetos);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  return null;
});

server.delete("/projects/:id", (req, res) => {
  return null;
});

server.post("/projects/:id/tasks", (res, req) => {
  return null;
});

server.listen(3000);
