const {BuscoSexo} = require('../model/imcModel.js')

const obtenerSexo = async (req,res)=>
{
    try
    {
        
        const Sexo= await BuscoSexo(req.userId)
         return res.status(200).json(Sexo)
    }
    catch(error)
    {
        console.log(error.message)
       return  res.status(500).json({error:error.message})
    }
}
module.exports = {obtenerSexo}