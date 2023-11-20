const express = require("express");
const router = express.Router();
const {getTipoRutina, createTipoRutina, updateTipoRutina, deleteTipoRutina}= require('../controllers/TipoRutinaController');

router.get('/getTipos',getTipoRutina )

router.put('/addTipo', createTipoRutina)

router.post('/updateTipo', updateTipoRutina)

router.post('/deleteTipo', deleteTipoRutina)

module.exports = router;