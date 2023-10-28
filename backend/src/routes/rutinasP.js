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

// obtener rutinas para mostrar
router.get('/AllRutinasP', getAllRutinasP);
router.get('/AllActividades', getAllActividadesP);
router.post('/createRutinaP', CreateRutinasP);
router.put('/updateRutinaP/:id', UpdateRutinasP);
router.get('/GetRutinaByIdP/:id', getRutinaByIdP);
router.get('/ActiveRutinasP', getActiveRutinasP);
router.put('/deleteRutinaP/:id', DeleteRutinaP);
router.get('/checkDniExist/:dni', checkDniExist);

module.exports = router;
