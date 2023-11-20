const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const GetAll= async () => {
    try {
        const tipoRutina = await prisma.tiporutina.findMany({
            where:{
                visible: true
            }
        });
        return tipoRutina;
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const updateTiposDeRutina = async (data) => 
{
    try{
        const tipoRutina = await prisma.tiporutina.update({
            where: {
                idTipoRutina: Number.parseInt(data.idTipoRutina)
            },
            data: {
                NombreTipo: data.NombreTipo,
              
            }
        })
        return tipoRutina
    }
    catch(error)
    {
        console.log(error.message)
        return  error
    }   
}

const CreateTipoDeRutina = async (data) =>
{
    try{
        const tipoRutina = await prisma.tiporutina.create({
            data: {
                NombreTipo: data.NombreTipo,
            }
        })
        return tipoRutina
    }
    catch(error)
    {
        console.log(error.message)
        return  error
    }   
}

const deleteTiposDeRutina = async (id) =>
{
    try{
        const tipoRutina = await prisma.tiporutina.update({
            where: {
            idTipoRutina: Number.parseInt(id)
            }
            ,
            data: {
                visible: false
            }
        })
        return tipoRutina
    }
    catch(error)
    {
        console.log(error.message)
        return  error
    }   
}

module.exports = { GetAll, CreateTipoDeRutina , updateTiposDeRutina, deleteTiposDeRutina }