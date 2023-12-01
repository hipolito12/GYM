const express = require('express');
const router = express.Router();
const {
  getAllRutinas,
  getAllActividades,
  CreateRutinas,
  UpdateRutinas,
  getRutinaById,
  getActiveRutinas,
  DeleteRutina,
} = require('../controllers/rutinasController.js');

const { validateCreate, validateUpdate } = require('../validators/rutinas.js')

// obtener rutinas para mostrar
router.get('/AllRutinas', getAllRutinas);
router.get('/AllActividades', getAllActividades);
router.post('/createRutina', validateCreate, CreateRutinas);
router.put('/updateRutina/:id', validateUpdate, UpdateRutinas);
router.get('/GetRutinaById/:id', getRutinaById);
router.get('/ActiveRutinas', getActiveRutinas);
router.put('/deleteRutina/:id', DeleteRutina);

module.exports = router;
