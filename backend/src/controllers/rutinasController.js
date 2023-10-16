const {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
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

module.exports = {
  getAllRutinas,
  getAllActividades,
  CreateRutinas,
};
