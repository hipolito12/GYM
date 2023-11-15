const express = require('express');
const router = express.Router();
const{ ObtnerDataInforme} = require('../controllers/InformeController');

router.get('/informe',ObtnerDataInforme );  //trae los datos de  Ventas Y cuotas


module.exports = router;