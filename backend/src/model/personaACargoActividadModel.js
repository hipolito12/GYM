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
    console.log(object);
    console.log(object.DniPersonaAcargo);
    let elements = await prisma.personaacargoactividad.create({
      data: {
        DniPersonaAcargo: object.DniPersonaAcargo,
        IdActividadFk: object.IdActividadFk,
        actividad: {
          connect: {
            ActividadId: object.IdActividadFk,
          }
        },
        persona: {
          connect: {
            dni: object.DniPersonaAcargo,
          }
        },
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
    // Convierte dni a float
    const DniPersonaAcargo = parseFloat(id);
    if (isNaN(DniPersonaAcargo)) {
      // Manejo de error si no se puede convertir a float
      throw new Error('El valor del dni no es un número válido');
    }
  
    console.log(updatedData);
    
    const updatedPersonaACargo = await prisma.personaacargoactividad.update({
      where: { DniPersonaAcargo }, // Usar la variable DniPersonaACargo convertida
      data: {
        IdActividadFk: updatedData.IdActividadFk,
      },
    });

    if (!updatedPersonaACargo) {
      throw new Error('Persona a cargo no encontrada');
    }


    return updatedPersonaACargo;
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
        DniPersonaAcargo: parseFloat(id),
      },
    });

    if (!DeletedPersonaacargoactividad) {
      throw new Error('Persona a cargo no encontrada');
    }

    return DeletedPersonaacargoactividad;
  }
  catch(e)
  {
    throw e;
  }
}

module.exports = {
    getPersonasACargoActividad,
    CreatePersonaACargoActividad,
    UpdatePersonaACargoActividad,
    searchOnePersonaACargoActividadModel,
    DeletePersonaACargoActividad
};
