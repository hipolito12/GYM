// el model sirve para hablar con prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPersonasACargoActividad = async () => {
  try {
    const personasACargoActividad = await prisma.personaacargoactividad.findMany({
      select: {
        DniPersonaAcargo: true,
        IdActividadFk: true, 
      },
    });
    return personasACargoActividad;
  } catch (error) {
    throw error;
  }
};

const CreatePersonaACargoActividad = async (object) => {
  try {
    let elements = await prisma.personaacargoactividad.create({
      data: {
        DniPersonaAcargo: object.persona,
        ActividadFk: object.actividad,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};


const UpdatePersonaACargoActividad = async (id, updatedData) => {
  try {
    // Convierte dni a entero
    const DniPersonaAcargo = parseInt(id, 10);
    if (isNaN(DniPersonaAcargo)) {
      // Manejo de error si no se puede convertir a entero
      throw new Error('El valor del dni no es un número válido.');
    }

    
    
    const updatedPersonaACargoActividad = await prisma.personaacargoactividad.update({
      where: { DniPersonaAcargo }, // Usar la variable DniPersonaACargo convertida
      data: {
        IdActividadFk: updatedData.nroAct,
      },
    });
    return updatedPersonaACargoActividad;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const searchOnePersonaACargoActividadModel = async (id) => {
  try {
    const personaACargo = await prisma.personaacargoactividad.findUnique({
      where: { DniPersonaAcargo: id },
      select: {
        DniPersonaAcargo: true,
        IdActividadFk: true,
      },
    });

    if (!personaACargo) {
      throw new Error('Persona a cargo no encontrada');
    }

    return personaACargo;
  } catch (error) {
    throw error;
  }
};

const DeletePersonaACargoActividad  = async (id) => 
{
  try
  {
    const DeletedPersonaacargoactividad = await prisma.personaacargoactividad.delete({
      where: {
        DniPersonaAcargo: Number.parseFloat(id) ,
      },
    });
    return DeletedPersonaacargoactividad;
  }
  catch(e)
  {
    console.log("error en eliminar la persona a cargo de la actividad"+e.message)
    return e.message
  }
}

module.exports = {
    getPersonasACargoActividad,
    CreatePersonaACargoActividad,
    UpdatePersonaACargoActividad,
    searchOnePersonaACargoActividadModel,
    DeletePersonaACargoActividad
};
