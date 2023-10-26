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

// obtener rutinas para mostrar
router.get('/AllRutinas', getAllRutinas);
router.get('/AllActividades', getAllActividades);
router.post('/createRutina', CreateRutinas);
router.put('/updateRutina/:id', UpdateRutinas);
router.get('/GetRutinaById/:id', getRutinaById);
router.get('/ActiveRutinas', getActiveRutinas);
router.put('/deleteRutina/:id', DeleteRutina);

module.exports = router;
