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
  console.log("body"+body);
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
    console.log("dwewew"+element);
    return element;
  } catch (err) {
    console.log(` Error en capa de datos: ${err.message}`);
  
};
}


module.exports = { loginModel, SignupModel }

