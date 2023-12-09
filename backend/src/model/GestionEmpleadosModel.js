const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const GetAllEmpleados = async () => {
    try {
        const empleados = await prisma.persona.findMany({
            where: {
                IdRolfk: {
                    not: {
                        in: [0, 1],
                    }
                },
                estado: true
            },
            select:{
                dni:true,
                email:true,
                password:true,
                NombreCompleto:true,
                sexo:true,
                telefono:true,
                direccion:true,
                rol:{
                    select:{
                       
                        NombreRol:true
                    }
                
                }
            }
        });
        return empleados;
    }
    catch (error) {
        console.log(error.message);
        return error

    }
}

const AddEmpleado = async (data) => {
    try {
        const newEmpleado = await prisma.persona.create({
            data: {
                dni: Number.parseInt(data.dni) ,
                IdRolfk: Number.parseInt(data.IdRolfk),
                email:data.email,
                password:data.password,
                NombreCompleto:data.NombreCompleto,
                sexo:data.sexo,
                telefono:data.telefono,
                direccion:data.direccion,
                estado:true
            }

        });
        return newEmpleado
    }
    catch (error) {
        console.log(error.message);
        return error
    }

}

const UpdateEmpleado = async (data) => 
{
    try{
        const updateEmpleado = await prisma.persona.update({
            where:{
                dni:data.dni
            },
            data:{
                IdRolfk:Number.parseInt(data.IdRolfk) ,
                email:data.email,
                password:data.password,
                NombreCompleto:data.NombreCompleto,
                sexo:data.sexo,
                telefono:data.telefono,
                direccion:data.direccion,
            }
        });
        return updateEmpleado;

    }
    catch(error){
        console.log(error.message);
        return error
    }
}

const DeleteEmpleado = async (id) =>{
    try{
        const deleteEmpleado = await prisma.persona.update({
            where:{
                dni: Number.parseInt(id) 
            },
            data:{
                estado:false
            }
        });
        return deleteEmpleado;

    }
    catch(error){
        console.log(error.message);
        return error
    }

}


const DeleteEmpleadoEnActividad = async (id) =>
{
    try{
        const deleteEmpleado = await prisma.personaacargoactividad.delete({
            where:{
                DniPersonaAcargo:Number.parseFloat(id)
            }
            
        });
        return deleteEmpleado;

    }
    catch(error){
        console.log(error.message);
        return error
    }

}


const ObtenerTipos = async () => 
{
    try 
    {
            const tipos = await prisma.rol.findMany({
              where:{
                activa:true
            },
                select: {
                    idrol: true,
                    NombreRol: true,
                   
                }
            });
            
            return tipos;
        
    }
    catch(e)
    {
        console.log("error en listado de roles"+e.message)
       return  res.status(500).json({msg: e.message +"desde Model "})
    }
}


module.exports = { GetAllEmpleados, AddEmpleado,UpdateEmpleado ,DeleteEmpleado,DeleteEmpleadoEnActividad,ObtenerTipos}