const express = require("express");
const server = express();

server.use(express.json());

const projetos = [];
var callCount = 0;

//middleware's
server.use((req, res, next) => {
  next();
  callCount++;
  console.log("Foi chamado " + callCount + " vezes.");
});

function checkProjeto(req, res, next) {
  const { id } = req.params;
  var have = false;

  for (projeto of projetos) {
    if (projeto.id == id) {
      have = true;
    }
  }

  if (!have) {
    return res.status(400).json({ error: "There isnt this id" });
  }

  return next();
}

server.post("/projects", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  var projeto = { id: id, title: title, tasks: [] };
  projetos.push(projeto);

  return res.json(projetos);
});

server.get("/projects", (req, res) => {
  return res.json(projetos);
});

server.put("/projects/:id", checkProjeto, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  for (projeto of projetos) {
    if (projeto.id == id) {
      projeto.title = title;
    }
  }

  return res.json(projetos);
});

server.delete("/projects/:id", checkProjeto, (req, res) => {
  const { id } = req.params;

  var count = 0;
  var positionToDelete = [];
  for (projeto of projetos) {
    if (projeto.id == id) {
      positionToDelete.push(count);
    }
    count++;
  }

  if (positionToDelete !== []) {
    for (obj of positionToDelete) {
      projetos.splice(obj);
    }
  }

  return res.json(projetos);
});

server.post("/projects/:id/tasks", checkProjeto, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  for (projeto of projetos) {
    if (projeto.id == id) {
      projeto.tasks.push(title);
    }
  }

  return res.json(projetos);
});

server.listen(3000);
