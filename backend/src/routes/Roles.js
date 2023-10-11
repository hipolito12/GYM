const express = require('express');
const {
  GetAllRols,
  DeleteRols,
  CreateRols,
  UpdateRols,
} = require('../controllers/rolController');
const router = express.Router();

router.get('/allRols', GetAllRols);

router.post('/createRol', CreateRols);

router.put('/updateRol', UpdateRols);

router.delete('/deleteRol', DeleteRols);

module.exports = router;
