const Sequelize = require("sequelize"); 

const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "flor";
const DB_CONFIG = {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Error ao conectar ao banco de dados");
}

async function hasConection(){
  try {
    await db.authenticate();
    console.log("Banco de Dados conectado!");
  } catch(error) {
    console.error("Error ao tentar conexão com banco de dados!")
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;

