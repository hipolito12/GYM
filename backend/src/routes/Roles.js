const express = require('express');
const {
  GetAllRols,
  DeleteRols,
  CreateRols,
  UpdateRols,
  getRolById,
} = require('../controllers/rolController');
const router = express.Router();

router.get('/allRols', GetAllRols);

router.post('/createRol', CreateRols);

router.put('/updateRol/:id', UpdateRols);
router.get('/GetRolById/:id', getRolById);
router.delete('/deleteRol', DeleteRols);

module.exports = router;
