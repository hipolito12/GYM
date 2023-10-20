const {informacionPagoModel,RegistrarModel} = require('../model/pagoCuotaModel');

const InformacionPago = async (req,res) => {
    try {
        const resultado = await informacionPagoModel(req.body.dni);

        return res.status(200).json({resultado});
    } catch (error) {
        console.error(error);
        return  res.status(400).json({message: "Error de autentidicacion"});
    }
};

const RegistraPago= async(req,res) => 
{
    try {
        const resultado = await RegistrarModel(req.body.dni);

        return res.status(200).json({resultado});
    } catch (error) {
        console.error(error);
        return  res.status(400).json({message: "Error de autentidicacion"});
    }
}

module.exports = {InformacionPago,RegistraPago};
