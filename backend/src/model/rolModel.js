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

const GetOneRol = async (id) => {
  try {
    const roleId = parseInt(id);
    let elements = await prisma.rol.findUnique({
      where: { idrol: roleId },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const UpdateRol = async (id, object) => {
  try {
    const roleId = parseInt(id);
    let elements = await prisma.rol.update({
      where: {
        idrol: roleId,
      },
      data: {
        NombreRol: object.NombreRol,
        Descripcion: object.Descripcion,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
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
  try {
    let elements = await prisma.rol.create({
      data: {
        NombreRol: object.nombre,
        Descripcion: object.descripcion,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

module.exports = { AllRols, UpdateRol, DeleteRol, CreateRol, GetOneRol };
