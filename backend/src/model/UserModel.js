const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ObtenerPago = async (dni) => {
  try {
    prisma.persona
      .findFirstOrThrow({
        where: {
          dni: dni,
        },
      })
      .then((persona) => {
        prisma.pago
          .findFirstOrThrow({
            where: {
              personaId: persona.dni,
            },
          })
          .then((pago) => {
            return pago;
          });
      });
  } catch (e) {
    console.log(`error al buscar id de usuario ${e.message}`);
  }
};

module.exports = { ObtenerPago };
