const {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
  UpdateRutina,
  searchOneRutinesModel,
} = require('../model/rutinasModel.js');

// Obtener todas las rutinas disponibles
const getAllRutinas = async (req, res) => {
  try {
    const rutinas = await searchAllRutinesModel();
    return res.status(200).json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener rutinas disponibles' });
  }
};

const getAllActividades = async (req, res) => {
  try {
    const actividades = await searchAllActividadesModel();
    return res.status(200).json(actividades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener actividades disponibles' });
  }
};
const CreateRutinas = async (req, res) => {
  try {
    const createdRutinas = await CreateRutina(req.body);
    return res.status(200).json(createdRutinas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const UpdateRutinas = async (req, res) => {
  try {
    const updatedRutinas = await UpdateRutina(req.params.id, req.body);
    return res.status(200).json(updatedRutinas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getRutinaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const rutinaID = await searchOneRutinesModel(id);
    res.status(200).json(rutinaID);
  } catch (error) {
    console.error(error);
    if (error.message === 'Rutina no encontrada') {
      res.status(404).json({ error: 'Rutina no encontrada' });
    } else {
      res.status(500).json({ error: 'Error al obtener la rutina por ID' });
    }
  }
};

module.exports = {
  getAllRutinas,
  getAllActividades,
  CreateRutinas,
  UpdateRutinas,
  getRutinaById,
};
