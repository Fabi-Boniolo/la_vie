const Psicologos = require("../models/Psicologos");

module.exports = async(req, res, next) =>{
    if(req.auth){
        const psicologo = await Psicologos.findByPk(req.auth.id)
        if(!psicologo){
            next({
                status:401, 
                name: "Unauthorized ERROR",
                inner: {
                    message: "Invalide user code"
                }
            })
        }
    }
    next()
};

