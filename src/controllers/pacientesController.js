const {Pacientes} = require("../models");

const pacientesController = {
    async listarPacientes(req, res){

        const listaDePacientes = await Pacientes.findAll()

        res.status(200).json(listaDePacientes)
    },

    async listarPorID(req, res) {
        try {
            const { id } = req.params;
            const pacientes = await Pacientes.findByPk(id);
            if (!pacientes) {
                return res.status(404).json("Id não encontrado");
            }
            res.status(200).json(pacientes);
            } catch (error) {
            console.log("Erro no servidor");
            console.error(error);
            return res.status(500).json("Erro no servidor");
            }
    },

    async cadastrarPacientes (req, res){
        const {nome, email, idade} = req.body; 

        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade
        });

        const atendimentoPaciente = await Pacientes.findByPk(pacientes_id);
        await novoPaciente.setAtendimentos(atendimentoPaciente);
        
        res.status(201).json(novoPaciente);
    },

    async deletarPacientes(req, res){
        try {
        const { id } = req.params;

        if (!id) return res.status(404).json("Id não encontrado!")

        await Pacientes.destroy({
            where:{
                id,
            },
        })

        res.status(204).json(`O paciente foi deletado.`)
        } catch(error) {
            return res.status(500).json("Ocorreu algum problema.")
        }
    },
    atualizarPacientes: async(req, res) => {
        const { id } = req.params;
        const { nome, email, idade} = req.body;

        if (!id){

            return res.status(400).json("Erro na requisição");
            } else {
                const PacienteAtualizado = await Pacientes.update({
                    nome,
                    email,
                    idade
                }, {
                    where: {
                        id,
                    }
                });
                const pacienteAposUpdate = await Pacientes.findByPk(id)
        
                return res.status(200).json(`${pacienteAposUpdate}`);

                
            }

        


    },

}

module.exports = pacientesController