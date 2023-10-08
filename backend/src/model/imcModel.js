const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const BuscoSexo= async (dni)=>
{
    try
    {
     Sex= await prisma.persona.findFirstOrThrow({
        where:{
            dni:dni
        },
        select:{sexo:true,NombreCompleto:true}
     })
     return Sex.sexo
    }
    catch(error)
    {
        console.log(error.message)
        return  error.message
    }
}
module.exports = {BuscoSexo}