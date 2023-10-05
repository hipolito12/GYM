// el model sirve para hablar con prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchAllModel = async () => {
  try {
    const rutinas = await prisma.rutinagenerica.findMany({
      select: {
        DescripcionRutina: true,
        actividad: { select: { NombreActividad: true } },
        tiporutina: { select: { NombreTipo: true } },
      },
    });
    console.log(rutinas);
    return rutinas;
  } catch (error) {
    throw error;
  }
};

module.exports = { searchAllModel };
