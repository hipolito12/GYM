const{getMisRutinas, getDetalleMisRutinas, getRutinasGenericas, getDetalleRutinasGenericas}=require('../model/MisRutinasModel.js')



const getMisRutinasController = async (req, res) => 
{
    try{ 
    const response = await getMisRutinas(req.userId)
    return res.status(200).json(response)

    }catch(err){
        console.log('error desde GetMisRutinasController'+err.message)
        return res.status(500).json({error: err.message})

    }
   
}


const getRutinasGenericasController = async (req, res) =>
{
    try{
        const response = await getRutinasGenericas()
        return res.status(200).json(response)
    }
    catch(err)
    {
        console.log('error desde GetRutinasGenericasController'+err.message)
        return res.status(500).json({error: err.message})
    }
}

module.exports = {getMisRutinasController,getRutinasGenericasController}