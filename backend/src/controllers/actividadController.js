const {
  searchAllActividadesModel,
  createdActividadesModel,
  UpdateActividadesModel,
  searchOneActividadModel,
  updateActividadActivaModel,
} = require('../model/actividadModel.js');

const getAllActividades = async (req, res) => {
  try {
    const actividades = await searchAllActividadesModel();
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las actividades activas' });
  }
};

const CreateActividades = async (req, res) => {
  try {
    const createdActividades = await createdActividadesModel(req.body);
    return res.status(200).json(createdActividades);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
const UpdateActividades = async (req, res) => {
  try {
    const updateActividades = await UpdateActividadesModel(
      req.params.id,
      req.body
    );
    console.log(updateActividades);
    return res.status(200).json(updateActividades);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
const GetActividadById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const actividadID = await searchOneActividadModel(id);
    res.status(200).json(actividadID);
  } catch (error) {
    console.error(error);
    if (error.message === 'Actividad no encontrada') {
      res.status(404).json({ error: 'Actividad no encontrada' });
    } else {
      res.status(500).json({ error: 'Error al obtener la Actividad por ID' });
    }
  }
};
const DeleteActividad = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID de Actividad no válido' });
    }
    const updatedRutina = await updateActividadActivaModel(id, 0);
    res.status(200).json(updatedRutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Actividad' });
  }
};
module.exports = {
  getAllActividades,
  CreateActividades,
  UpdateActividades,
  GetActividadById,
  DeleteActividad,
};
