const express = require('express');
const router = express.Router();
const {
  getAllRutinas,
  getAllActividades,
  CreateRutinas,
} = require('../controllers/rutinasController.js');

// obtener rutinas para mostrar
router.get('/AllRutinas', getAllRutinas);
router.get('/AllActividades', getAllActividades);
router.post('/createRutina', CreateRutinas);

module.exports = router;
