const db = require("../database");

const { DataTypes } = require("sequelize");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


const Atendimentos= db.define("Atendimentos", {
    atendimento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pacientes_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: "id",
        },
    },
    psicologos_id: {
        type: DataTypes.INTEGER,
        references: {
            odel: Psicologos,
            key: "id",
        }
        
        },
    data_atendimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
},
{
    tableName: "atendimentos",
});


module.exports = Atendimentos;