const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController"); 
const psicologoValidador = require("../validations/psicologo/login"); 
const psicologoStoreValidador = require("../validations/psicologo/store");

const auth = require("../middlewares/auth");

const routes = express.Router();


routes.get('/', (req, res) => {
  console.log(req.query)
  res.send('Olá mundo')
})

routes.get("/pacientes/listar", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPorID); 
routes.post("/pacientes/cadastrar", pacientesController.cadastrarPacientes);
routes.put("/pacientes/:id", pacientesController.atualizarPacientes);
routes.delete("/pacientes/:id", pacientesController.deletarPacientes);


routes.get("/psicologos/listar", psicologosController.listarPsicologos);
routes.get('/psicologos/:id', psicologosController.listarPorID); 
routes.post("/psicologos/cadastrar", psicologoStoreValidador, psicologosController.cadastrarPsicologos);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologos);
routes.put("/psicologos/:id",psicologosController.atualizarPsicologos);

routes.get("/atendimentos/listar", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosPorId) 
routes.post("/atendimentos/cadastrar", atendimentosController.cadastrarAtendimentos);

routes.post("/login",psicologoValidador, authController.login); 



module.exports = routes;

