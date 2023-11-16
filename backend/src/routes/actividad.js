const express = require('express');
const router = express.Router();
const {
  getAllActividades,
  CreateActividades,
  UpdateActividades,
  GetActividadById,
  DeleteActividad,
} = require('../controllers/actividadController.js');
const { validateCreate, validateUpdate } = require('../validators/actividad')

// obtener rutinas para mostrar
router.get('/ActiveActividades', getAllActividades);
router.post('/createActividad', validateCreate, CreateActividades);
router.put('/updateActividad/:id', validateUpdate, UpdateActividades);
router.get('/getActividadById/:id', GetActividadById);
router.put('/deleteActividad/:id', DeleteActividad);

module.exports = router;
