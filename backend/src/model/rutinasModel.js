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
  const fechaActual = new Date();
  const fechaHoy =
    fechaActual.getFullYear() +
    '-' +
    (fechaActual.getMonth() + 1) +
    '-' +
    fechaActual.getDay();
  try {
    let elements = await prisma.rutinagenerica.create({
      data: {
        TipoRutinaFk: object.tipo,
        DescripcionRutina: object.descripcion,
        ActividadFk: object.nroAct,
        fechaActualizacion: fechaHoy,
        Imagenes: object.imagen,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

module.exports = {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
};
