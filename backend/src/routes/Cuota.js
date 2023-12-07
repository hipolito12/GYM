const express = require("express");
const router = express.Router();
const{ActualizaPrecio,ValorCuota}= require('../controllers/CuotaController.js');

router.post('/ActualizaPrecio',ActualizaPrecio)

router.get('/ValorCuota',ValorCuota)

module.exports = router