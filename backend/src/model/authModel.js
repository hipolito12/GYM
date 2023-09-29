const { PrismaClient } = require("@prisma/client");
const { Rols, States } = require("../Rols.js");
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
    password =body.Contrase_a,
    nombre= `${body.nombre} ${body.apellido}`,
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



module.exports = { loginModel, SignupModel }

