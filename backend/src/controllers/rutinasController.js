const {
  searchAllRutinesModel,
  searchAllActividadesModel,
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

// Obtener una rutina por ID
const getRutinaById = async (req, res) => {
  const { id } = req.params;
  try {
    const rutina = await prisma.rutinagenerica.findUnique({
      where: { idRutinaGenerica: parseInt(id) },
    });
    if (!rutina) {
      return res.status(404).json({ error: 'Rutina no encontrada' });
    }
    res.json(rutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener rutina' });
  }
};

module.exports = {
  getAllRutinas,
  getRutinaById,
  getAllActividades,
};
