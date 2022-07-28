const {Psicologos} = require("../models");
const bcrypt = require("bcryptjs")

const psicologosController = {
    async listarPsicologos(req, res){
        const listaDePsicologos = await Psicologos.findAll()

        res.status(200).json(listaDePsicologos)
},

//inseri listar por id
    async listarPorID(req, res) {
    try {
        const { id } = req.params;
        const psicologoPorID = await Psicologos.findByPk(id, {
            attributes: { exclude: ["senha"] },
        });

        if (!psicologoPorID) {
            return res.status(404).json("Id não encontrado");
        }

        res.status(200).json(psicologoPorID);
        } catch (error) {
        console.error("Erro no servidor");
        //console.log(error);  //hoje
        res.status(500).json("Erro no servidor");
    }
},
//ate aqui

    async cadastrarPsicologos(req, res){
    const { nome, email, senha, apresentacao, atendimento_id } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10); // hoje 6 p 10

    const newPsicologos = await Psicologos.create({ 
        nome, 
        email, 
        senha: newSenha, 
        apresentacao
    });

    //const atendimento = await Atendimentos.findByPk(atendimento_id);
    //await newPsicologos.setAtendimentos(atendimento);


    res.status(201).json(newPsicologos);
},

async deletarPsicologos(req, res){
    try {
    const { id } = req.params;

    if (!id) return res.status(404).json("Id não encontrado!")

    await Psicologos.destroy({
        where:{
            id,
        },
})

    res.status(204).json(`O psicologo foi deletado.`)
    } catch(error) {
        return res.status(500).json("Ocorreu algum problema.")
}

},

    async  atualizarPsicologos (req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao} = req.body;

    if (!id){

        return res.status(400).json("Erro na requisição");
        } else {
            const PsicologoAtualizado = await Psicologos.update({
                nome,
                email,
                senha,
                apresentacao
        }, {
                where: {
                    id,
                }
        });
            const psicologoAposUpdate = await Psicologos.findByPk(id)

            return res.status(200).json(`${psicologoAposUpdate}`);


    }


},
}


module.exports = psicologosController;