// el model sirve para hablar con prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchAllRutinesModel = async () => {
  try {
    const rutinas = await prisma.rutinagenerica.findMany({
      select: {
        idRutinaGenerica: true,
        DescripcionRutina: true,
        actividad: { select: { NombreActividad: true } },
        tiporutina: { select: { NombreTipo: true } },
        fechaActualizacion: true,
      },
    });
    console.log(rutinas);
    return rutinas;
  } catch (error) {
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
    throw error;
  }
};

const CreateRutina = async (object) => {
  try {
    let elements = await prisma.rutinagenerica.create({
      data: {
        TipoRutinaFk: object.tipo,
        DescripcionRutina: object.descripcion,
        ActividadFk: object.nroAct,
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
    const idRutinaGenerica = parseInt(id, 10);
    if (isNaN(idRutinaGenerica)) {
      // Manejo de error si no se puede convertir a número
      throw new Error('El valor de id no es un número válido.');
    }

    const fechaActualizacion = new Date();
    const formattedFechaActualizacion = fechaActualizacion
      .toISOString()
      .split('T')[0];
    const updatedRutina = await prisma.rutinagenerica.update({
      where: { idRutinaGenerica }, // Usar la variable idRutinaGenerica convertida
      data: {
        DescripcionRutina: updatedData.descripcion,
        ActividadFk: updatedData.nroAct,
        TipoRutinaFk: updatedData.tipo,
        Imagenes: updatedData.imagen,
        fechaActualizacion: formattedFechaActualizacion,
      },
    });
    return updatedRutina;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const searchOneRutinesModel = async (id) => {
  try {
    const rutina = await prisma.rutinagenerica.findUnique({
      where: { idRutinaGenerica: id },
      select: {
        idRutinaGenerica: true,
        DescripcionRutina: true,
        actividad: { select: { ActividadId: true } },
        Imagenes: true,
        tiporutina: { select: { idTipoRutina: true } },
        fechaActualizacion: true,
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

module.exports = {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
  UpdateRutina,
  searchOneRutinesModel,
};
