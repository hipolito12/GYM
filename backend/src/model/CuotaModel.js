const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const UpdatePrecioCuota= async (precio)=>{
    try{
        console.log(precio);
         const update= await prisma.preciocuota.update({
        where:{
            idpreciocuota:1
        },
        data:{
            valor:  Number.parseFloat(precio),
            fechaActualizacion: new Date()
        }
    })
    return update;
    }
    catch(error)
    {
        console.log(error.message);
        return error;
    }
   

}

const getValor= async ()=>{
    const precio= await prisma.preciocuota.findMany({
        select:{
            valor:true,
        }
    })
    return precio;
}
module.exports={UpdatePrecioCuota,getValor};