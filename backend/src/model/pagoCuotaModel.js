const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const informacionPagoModel = async (dni) => {
  try {
    const resultado = await prisma.persona.findFirstOrThrow({
      where: { dni: Number.parseInt(dni) },
      select: {
        NombreCompleto: true,
        sexo: true,
      },
    });
    const valorCuota = await prisma.preciocuota.findFirstOrThrow({
      select: { valor: true },
    });
    resultado.valorcuota = valorCuota.valor;
    return resultado;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error de autenticacion' });
  }
};

const RegistrarModel = async (dni) => {
  try {
    const resultado = await prisma.cuota.create({
      data: {
        DniFK: Number.parseInt(dni),
        FechaPago: new Date(),
        precioActual: 1,
      },
    });
    return resultado;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error de autentidicacion' });
  }
};

module.exports = { informacionPagoModel, RegistrarModel };
