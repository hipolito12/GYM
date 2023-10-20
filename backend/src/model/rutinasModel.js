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
const UpdateRutina = async (object) => {
  try {
    //return elements;
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
