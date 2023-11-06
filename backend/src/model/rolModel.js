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

const updateRolActivoModel = async (id, nuevoValor) => {
  try {
    const rol = await prisma.rol.update({
      where: { idrol: id },
      data: {
        activa: false,
      },
    });
    return rol;
  } catch (error) {
    throw error;
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

const searchActiveRolsModel = async () => {
  try {
    const roles = await prisma.rol.findMany({
      where: {
        activa: true, // Filtra las rutinas con activa igual a 1 (activas)
      },
      select: {
        idrol: true,
        NombreRol: true,
        Descripcion: true,
      },
    });
    return roles;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  AllRols,
  UpdateRol,
  updateRolActivoModel,
  CreateRol,
  GetOneRol,
  searchActiveRolsModel,
};
