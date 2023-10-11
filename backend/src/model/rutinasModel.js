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

module.exports = { searchAllRutinesModel, searchAllActividadesModel };
