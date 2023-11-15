const express = require('express');
const router = express.Router();
const {
  getAllActividades,
  CreateActividades,
  UpdateActividades,
  GetActividadById,
  DeleteActividad,
} = require('../controllers/ActividadController.js');
const { validateCreate } = require('../validators/actividad')

// obtener rutinas para mostrar
router.get('/ActiveActividades', getAllActividades);
router.post('/createActividad', validateCreate, CreateActividades);
router.put('/updateActividad/:id', UpdateActividades);
router.get('/getActividadById/:id', GetActividadById);
router.put('/deleteActividad/:id', DeleteActividad);

module.exports = router;
