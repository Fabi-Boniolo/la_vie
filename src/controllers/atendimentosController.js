const { Pacientes, Psicologos, Atendimentos } = require("../models");


const atendimentosController = {
    listarAtendimentos: async(req, res) => {
        const listaAtendimentos = await Atendimentos.findAll({
            include: Pacientes,
            include: Psicologos 
        });

        res.status(200).json(listaAtendimentos);
    },

    listarAtendimentosPorId: async(req, res) => {
        const { id } = req.params;

        const listaAtendimentosID = await Atendimentos.findByPk(id);

        res.status(200).json(listaAtendimentosID);
    },

    async cadastrarAtendimentos(req, res) {
        const { pacientes_id, psicologos_id, data_atendimento, observacao  } = req.body;

        novoAtendimento = await Atendimentos.create({
            pacientes_id,
            psicologos_id,
            data_atendimento,
            observacao,
        
        });

        res.status(201).json(novoAtendimento);
    },

};



module.exports = atendimentosController;