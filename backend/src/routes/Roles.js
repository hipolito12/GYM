const express = require('express');
const {
  GetAllRols,
  DeleteRols,
  CreateRols,
  UpdateRols,
  getRolById,
  getActiveRols,
} = require('../controllers/rolController');
const router = express.Router();
const { validateCreate, validateUpdate } = require('../validators/Roles.js')

router.get('/allRols', GetAllRols);
router.get('/ActiveRols', getActiveRols);
router.post('/createRol',validateCreate, CreateRols);

router.put('/updateRol/:id',validateUpdate, UpdateRols);  /* REVISAR validateUpdate */
router.get('/GetRolById/:id', getRolById);
router.put('/deleteRol/:id', DeleteRols);

module.exports = router;
