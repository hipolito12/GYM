const {
  searchAllRutinesModel,
  searchAllActividadesModel,
  CreateRutina,
  UpdateRutina,
  searchOneRutinesModel,
  searchActiveRutinesModelP,
  updateRutinaActivaModel,
  checkDniExistModel,
} = require('../model/rutinasPModel.js');

const checkDniExist = async (req, res) => {
  try {
    const dni = req.params.dni;
    const exists = await checkDniExistModel(dni);

    if (exists) {
      res.status(200).json({ message: 'El DNI existe en la base de datos' });
    } else {
      res.status(404).json({ message: 'El DNI no existe en la base de datos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al verificar el DNI' });
  }
};

const getActiveRutinasP = async (req, res) => {
  try {
    const rutinas = await searchActiveRutinesModelP();
    console.log(rutinas);
    res.json(rutinas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las rutinas activas' });
  }
};

// Obtener todas las rutinas disponibles
const getAllRutinasP = async (req, res) => {
  try {
    const rutinas = await searchAllRutinesModel();
    return res.status(200).json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener rutinas disponibles' });
  }
};

const getAllActividadesP = async (req, res) => {
  try {
    const actividades = await searchAllActividadesModel();
    return res.status(200).json(actividades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener actividades disponibles' });
  }
};
const CreateRutinasP = async (req, res) => {
  try {
    const createdRutinas = await CreateRutina(req.body);
    return res.status(200).json(createdRutinas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const UpdateRutinasP = async (req, res) => {
  try {
    const updatedRutinas = await UpdateRutina(req.params.id, req.body);
    return res.status(200).json(updatedRutinas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getRutinaByIdP = async (req, res) => {
  try {
    const id = Number(req.params.id);
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

const DeleteRutinaP = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID de rutina no válido' });
    }
    const updatedRutina = await updateRutinaActivaModel(id, 0);
    res.status(200).json(updatedRutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
};

module.exports = {
  getAllRutinasP,
  getAllActividadesP,
  CreateRutinasP,
  UpdateRutinasP,
  getRutinaByIdP,
  getActiveRutinasP,
  DeleteRutinaP,
  checkDniExist,
};
