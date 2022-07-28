const express = require("express");
const routes = require("./routes"); 
const authMiddlewares = require("./middlewares/auth"); 
const handleError = require("./middlewares/handleError");
const db = require("./database");


const app = express();

db.hasConection();

app.use(express.json());
app.use(authMiddlewares); 

app.use(routes);

app.use(handleError);

app.listen(3000, () => console.log("servidor rodando na porta 3000"));