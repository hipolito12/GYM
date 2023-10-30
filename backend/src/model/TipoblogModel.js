const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const tipoBlog=async()=>
{
    try
    {
        const tipoBlog=await prisma.tipopost.findMany({
            where:{
                visible:true
            }
        
        });
        return tipoBlog;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}


const CreatetipoBlog=async(nombre)=>
{
    try
    {
        const tipoBlog=await prisma.tipopost.create({
            data:{

                NombreTIpo:nombre
            }
        });
        return tipoBlog;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}
 
const UpdatetipoBlog=async(id,nombre)=>{
    try
    {
        const tipoBlog=await prisma.tipopost.update({
            where:{
                TipoId :id
            },
            data:{
                NombreTIpo:nombre
            }
        });
        return tipoBlog;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}

const deleteOneTipoBlog=async(id)=>{
    try
    {
        const tipoBlog=await prisma.tipopost.update({
            where:{
                TipoId:id
            },
            data:{
                visible:false
            }
        });
        return tipoBlog;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}

const deleteAllBlogs=async(id)=>{
    try
    {
        const tipoBlog=await prisma.post.updateMany({
            where:{
                TipoPostFk : id
            },
            data:{
                visible:false
            }
        
        });
        return tipoBlog;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}

 module.exports={tipoBlog,CreatetipoBlog, UpdatetipoBlog,deleteOneTipoBlog,deleteAllBlogs};