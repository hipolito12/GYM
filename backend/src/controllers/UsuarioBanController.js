const {UsuarioBaneadosModel,UsuarioHabilitadosModel,BanearUsuarioModel,HabilitarUsuarioModel} =require('../model/UsuarioBanModel');

const ObtenerUsuarioInhabilitado=  async (req,res)=> 
{
    try {
        const usuarioInhabilitado = await UsuarioBaneadosModel();

        res.status(200).json({usuarioInhabilitado});
    } catch (error) {
        console.log(error.message);
        res.status(402).json({message: error});
    }

}

const ObtenerUsuarioHabilitado =  async (req,res)=> 
{
    try {
        const Habilitados = await UsuarioHabilitadosModel();
        res.status(200).json({Habilitados});
    } catch (error) {
        console.log(error.message);
        res.status(402).json({message: error});
    }

}

const Banear =  async (req,res)=> 
{
    try {
        const baneado = await BanearUsuarioModel(req.body.id);
        res.status(200);
    } catch (error) {
        console.log(error.message);
        res.status(402).json({message: error});
    }

}



const Habilitar =  async (req,res)=> 
{
    try {
        const Habilitado = await HabilitarUsuarioModel(req.body.id);
        res.status(200);
    } catch (error) {
        console.log(error.message);
        res.status(402).json({message: error});
    }

}







module.exports = {ObtenerUsuarioInhabilitado,ObtenerUsuarioHabilitado,Banear,Habilitar};