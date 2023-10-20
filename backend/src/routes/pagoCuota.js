const express = require('express');
const router = express.Router();
const {InformacionPago,RegistraPago}= require('../controllers/pagoCuotaController');

router.post('/pagarCuota', InformacionPago)

router.post('/RegistrarPago', RegistraPago)

module.exports = router;
