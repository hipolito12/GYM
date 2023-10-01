const express = require('express');
const router = express.Router();
const {getAllRutinas,getRutinaById} = require('../controllers/rutinasController.js');

// obtener rutinas para mostrar
router.get('/', getAllRutinas);
router.get('/',getRutinaById);

//agregar rutina (post)

module.exports = router;