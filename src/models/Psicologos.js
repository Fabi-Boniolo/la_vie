const { DataTypes } = require("sequelize");

const db = require("../database");

const Psicologos = db.define( "Psicologos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  senha: {
    type: DataTypes.STRING
  },
  apresentacao: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  },
  UpdatedAt: {
    type: DataTypes.DATE
  }
},
{
  tableName: "psicologos"
});

module.exports = Psicologos;