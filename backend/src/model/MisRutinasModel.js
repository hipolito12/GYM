const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const getMisRutinas = async (id) => 
{
    try{ 
    const response = await prisma.rutinapersonalizada.findMany({
        where: {
            PersonaDniFk:id 
        },
        select:
        {
            DescripcionRutina: true,
            idRutinaPersonalizada:true,
            Imagenes: true,
            fechaActualizacion: true,
            tiporutina:{
                select:{ NombreTipo: true}
               
            }
        }
    })
    console.log(response)   
    return response

    }catch(err){
        console.log('error desde GetMisRutinasModel'+err.message)
        return res.status(500).json({error: err.message})

    }
}




const getDetalleMisRutinas = async (id) => {}

const getRutinasGenericas = async () => 
{
    try{
        const response = await prisma.rutinagenerica.findMany({
            select:
            {
                DescripcionRutina: true,
                idRutinaGenerica:true,
                Imagenes: true,
                fechaActualizacion: true,
                tiporutina:{
                    select:{NombreTipo: true}
                    
                }
            }
        })
        console.log(response)   
        return response
    }
    catch(err)
    {
        console.log('error desde GetRutinasGenericasModel'+err.message)
        return res.status(500).json({error: err.message})
    }
}

const getDetalleRutinasGenericas = async (id) => {}


module.exports = {getMisRutinas, getDetalleMisRutinas, getRutinasGenericas, getDetalleRutinasGenericas}