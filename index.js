const express = require("express");
const server = express();

server.use(express.json());

const projetos = [];

server.post("/projects", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  var projeto = `{ id: ${id}, title: ${title}, task: [] }`;
  projetos.push(projeto);

  return res.json(projetos);
});

server.get("/projects", (req, res) => {
  return res.json(projetos);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  var projeto = `{ id: ${id}, title: ${title}, task: [] }`;
  projetos[id] = projeto;

  return res.json(projetos);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  projetos.splice(id, 1);

  return res.json(projetos);
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { task } = req.body;

  var projeto = `{ id: ${id}, title: ${title}, task: [${task}] }`;
  projetos[id] = projeto;

  return res.json(projetos);
});

server.listen(3000);
