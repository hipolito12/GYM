// el model sirve para hablar con prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const checkDniExistModel = async (dni) => {
  try {
    // Lógica para verificar si el DNI existe en la base de datos
    const persona = await prisma.persona.findUnique({
      where: {
        dni,
      },
    });
    console.log(persona);
    return persona !== null;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const searchActiveRutinesModelP = async () => {
  try {
    const rutinas = await prisma.rutinapersonalizada.findMany({
      where: {
        activo: true, // Filtra las rutinas con activa igual a 1 (activas)
      },
      select: {
        idRutinaPersonalizada: true,
        persona: { select: { dni: true } },
        DescripcionRutina: true,
        actividad: { select: { NombreActividad: true } },
        tiporutina: { select: { NombreTipo: true } },
        fechaActualizacion: true,
        Imagenes: true,
      },
    });
    return rutinas;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const searchAllRutinesModel = async () => {
  try {
    const rutinas = await prisma.rutinapersonalizada.findMany({
      select: {
        idRutinaPersonalizada: true,
        PersonaDniFk: { select: { dni: true } },
        DescripcionRutina: true,
        actividad: { select: { NombreActividad: true } },
        tiporutina: { select: { NombreTipo: true } },
        fechaActualizacion: true,
        Imagenes: true,
      },
    });
    console.log(rutinas);
    return rutinas;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const searchAllActividadesModel = async () => {
  try {
    const actividades = await prisma.actividad.findMany({
      select: {
        ActividadId: true,
        NombreActividad: true,
      },
    });
    return actividades;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const CreateRutina = async (object) => {
  try {
    let elements = await prisma.rutinapersonalizada.create({
      data: {
        TipoRutinaFk: object.tipo,
        PersonaDniFk: object.dni,
        DescripcionRutina: object.descripcion,
        IdActividadfk: object.nroAct,
        fechaActualizacion: object.fechaAct,
        Imagenes: object.imagen,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};
const UpdateRutina = async (id, updatedData) => {
  try {
    // Convierte id a número
    const idRutinaPersonalizada = parseInt(id, 10);
    if (isNaN(idRutinaPersonalizada)) {
      // Manejo de error si no se puede convertir a número
      throw new Error('El valor de id no es un número válido.');
    }

    const fechaActualizacion = new Date();
    const formattedFechaActualizacion = fechaActualizacion
      .toISOString()
      .split('T')[0];
    const updatedRutinaP = await prisma.rutinapersonalizada.update({
      where: { idRutinaPersonalizada }, // Usar la variable idRutinaGenerica convertida
      data: {
        DescripcionRutina: updatedData.descripcion,
        IdActividadfk: updatedData.nroAct,
        TipoRutinaFk: updatedData.tipo,
        Imagenes: updatedData.imagen,
        fechaActualizacion: formattedFechaActualizacion,
      },
    });
    return updatedRutinaP;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const searchOneRutinesModel = async (id) => {
  try {
    const rutina = await prisma.rutinapersonalizada.findUnique({
      where: { idRutinaPersonalizada: id },
      select: {
        idRutinaPersonalizada: true,
        PersonaDniFk: true,
        DescripcionRutina: true,
        actividad: { select: { ActividadId: true } },
        tiporutina: { select: { idTipoRutina: true } },
        fechaActualizacion: true,
        Imagenes: true,
      },
    });

    if (!rutina) {
      throw new Error('Rutina no encontrada');
    }

    return rutina;
  } catch (error) {
    throw error;
  }
};

const updateRutinaActivaModel = async (id, nuevoValor) => {
  try {
    const rutina = await prisma.rutinapersonalizada.update({
      where: { idRutinaPersonalizada: id },
      data: {
        activo: false,
      },
    });
    return rutina;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
  UpdateRutina,
  searchOneRutinesModel,
  searchActiveRutinesModelP,
  updateRutinaActivaModel,
  checkDniExistModel,
};
