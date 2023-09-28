const { PrismaClient } = require("@prisma/client");
const { Roles, Estados } = require("../Rols.js");
const prisma = new PrismaClient();

const loginModel = async (user) => {
  try {
    let element = prisma.persona.findFirstOrThrow({
      where: { dni: user.dni },
    });
    return element;
  } catch (err) {
    console.log(` Error en capa de datos: ${err.message}`);
  }
};

const SignupModel = async (body) => {
  const {
    dni,
    contrase_a,
    nombre,
    apellido,
    telefono,
    email,
    sexo,
    direccion,
  } = body;

  let NuevoUsario = await prisma.persona.create({
    data: {
      dni: dni,
      contrase_a: Contrase_a,
      NombreCompleto: `${nombre}  ${apellido}`,
      telefono: telefono,
      email: email,
      sexo: sexo,
      IdRolfk: Roles.usuario,
      Direccion: direccion,
      estado: Estados.Permitido,
    },
  });
};

module.exports = { loginModel, SignupModel };
