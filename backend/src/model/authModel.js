const { PrismaClient } = require("@prisma/client");
const { Rols, States } = require("../Rols.js");
const prisma = new PrismaClient();

const loginModel = async (dni) => {
  try {
    let element = await prisma.persona.findFirst({
      where: { dni:Number.parseInt(dni)  },
    });
    console.log(element);
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
  try {
    let element = await prisma.persona.create({
      data: {
        dni: Number.parseInt( dni),
        password: password,
        NombreCompleto: nombre,
        telefono: telefono,
        email: email,
        sexo: sexo,
        direccion: direccion,
        IdRolfk: Rols.usuario,
        estado:States.Permitido,
      },
    });
    return element;
  } catch (err) {
    console.log(` Error en capa de datos: ${err.message}`);
  
};
}


module.exports = { loginModel, SignupModel }

