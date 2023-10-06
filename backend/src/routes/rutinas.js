const express = require('express');
const router = express.Router();
const {
  getAllRutinas,
  getRutinaById,
  getAllActividades,
} = require('../controllers/rutinasController.js');

// obtener rutinas para mostrar
router.get('/AllRutinas', getAllRutinas);
router.get('/', getRutinaById);
router.get('/AllActividades', getAllActividades);

//agregar rutina (post)

module.exports = router;
