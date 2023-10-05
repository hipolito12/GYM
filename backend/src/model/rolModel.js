const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const AllRols = async () => {
  try {
    let elements = await prisma.rol.findMany();
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const UpdateRol = async (object) => {
  try {
    let elements = prisma.rol.update({
      where: { idrol: object.id },
      data: {
        NombreRol: object.nombre,
        Descripcion: object.descripcion,
      },
    });
  } catch (e) {}
};

const DeleteRol = async (id) => {
  try {
    prisma.rol.delete({
      where: { idrol: id },
    });
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};
const CreateRol = async (object) => {
  let elements = prisma.rol.create({
    data: {
      NombreRol: object.nombre,
      Descripcion: object.descripcion,
    },
  });
};

module.exports = { AllRols, UpdateRol, DeleteRol, CreateRol };
