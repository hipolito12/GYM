const express = require('express');
const router = express.Router();
const {
  getAllRutinasP,
  getAllActividadesP,
  CreateRutinasP,
  UpdateRutinasP,
  getRutinaByIdP,
  getActiveRutinasP,
  DeleteRutinaP,
  checkDniExist,
} = require('../controllers/rutinasPController.js');

const { validateCreate, validateUpdate } = require('../validators/rutinasP.js')

// obtener rutinas para mostrar
router.get('/AllRutinasP', getAllRutinasP);
router.get('/AllActividadesP', getAllActividadesP);
router.post('/createRutinaP', validateCreate, CreateRutinasP);
router.put('/updateRutinaP/:id', validateUpdate, UpdateRutinasP);
router.get('/GetRutinaByIdP/:id', getRutinaByIdP);
router.get('/ActiveRutinasP', getActiveRutinasP);
router.put('/deleteRutinaP/:id', DeleteRutinaP);
router.get('/checkDniExist/:dni', checkDniExist);

module.exports = router;
