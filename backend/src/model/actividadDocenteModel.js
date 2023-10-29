const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const ActividadDeDocente = async (dni) => 
{
    try {
        actividad= await prisma.actividad.findFirst({
            
            select: {
                ActividadId : true,
                NombreActividad : true,
                Turno : true,
                Hora_Inicio : true,
                Hora_Fin: true,
                Descripcion : true,
                Cupo : true,
                personaacargoactividad: {
                    where: {
                        DniPersonaAcargo :Number.parseInt(dni)}
                }
            }
        });

        horarios= await prisma.actividad.findMany({
            select: {
                Hora_Inicio: true,
                Hora_Fin: true,
            }
        });

        actividad.horarios=horarios
        return actividad


    }
    catch(err)
    {
        console.log(err.message + "error en aactividad de docente model")
        return err.message
    }
}



const ModificarActividadDeDocente = async (actividad) => 
{
    let id=Number.parseInt(actividad.id) 
    try {
        actividad= await prisma.actividad.update({
            where: {
                ActividadId: id ,
            }
            ,data: {
                NombreActividad : actividad.nombre,
                Turno : actividad.turno, 
                Hora_Inicio : actividad.inicio,
                Hora_Fin: actividad.fin  ,
                Descripcion : actividad.descripcion,  
                Cupo : actividad.cupo,
            }
        
        });
        return actividad

    }
    catch(err)
    {
        console.log(err.message)
        return err.message
    }
}

module.exports = {ActividadDeDocente,ModificarActividadDeDocente}