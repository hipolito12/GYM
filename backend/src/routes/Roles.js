const express = require('express');
const {
  GetAllRols,

  UpdateRol,
  DeleteRols,
  CreateRols,
} = require('../controllers/rolController');
const router = express.Router();

router.get('/allRols', GetAllRols);

router.post('/createRol', CreateRols);

router.put('/updateRol', UpdateRol);

router.delete('/deleteRol', DeleteRols);

module.exports = router;
