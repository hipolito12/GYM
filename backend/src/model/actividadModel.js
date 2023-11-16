// el model sirve para hablar con prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchAllActividadesModel = async () => {
  try {
    const actividad = await prisma.actividad.findMany({
      where: {
        activa: true, // Filtra las rutinas con activa igual a 1 (activas)
      },
      select: {
        ActividadId: true,
        NombreActividad: true,
        Turno: true,
        Hora_Fin: true,
        Hora_Inicio: true,
        Descripcion: true,
        Cupo: true,
      },
    });
    return actividad;
  } catch (error) {
    throw error;
  }
};
const createdActividadesModel = async (object) => {
  try {
    let elements = await prisma.actividad.create({
      data: {
        NombreActividad: object.nombre,
        Turno: object.turno,
        Hora_Inicio: object.horaI,
        Hora_Fin: object.horaF,
        Descripcion: object.descrip,
        Cupo: object.cup,
      },
    });
    return elements;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};
const UpdateActividadesModel = async (id, updatedData) => {
  try {
    // Convierte id a número
    const idActividad = parseInt(id, 10);
    if (isNaN(idActividad)) {
      // Manejo de error si no se puede convertir a número
      throw new Error('El valor de id no es un número válido.');
    }
    const updatedAct = await prisma.actividad.update({
      where: { ActividadId: idActividad },
      data: {
        NombreActividad: updatedData.nombre,
        Turno: updatedData.turno,
        Hora_Inicio: updatedData.horaI,
        Hora_Fin: updatedData.horaF,
        Descripcion: updatedData.descrip,
        Cupo: updatedData.cupo,
      },
    });
    return updatedAct;
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

const searchOneActividadModel = async (id) => {
  try {
    const actividad = await prisma.actividad.findUnique({
      where: { ActividadId: id },
      select: {
        NombreActividad: true,
        Turno: true,
        Hora_Fin: true,
        Hora_Inicio: true,
        Descripcion: true,
        Cupo: true,
      },
    });

    if (!actividad) {
      throw new Error('Actividad no encontrada');
    }

    return actividad;
  } catch (error) {
    throw error;
  }
};

const updateActividadActivaModel = async (id, nuevoValor) => {
  try {
    const actividad = await prisma.actividad.update({
      where: { ActividadId: id },
      data: {
        activa: false,
      },
    });
    return actividad;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchAllActividadesModel,
  createdActividadesModel,
  UpdateActividadesModel,
  searchOneActividadModel,
  updateActividadActivaModel,
};
