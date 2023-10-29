const express = require('express');
const { GetActividadDocente, actulizarActividadDocente}= require('../controllers/actividadDocenteController');
const {VerificoToken} = require("../controllers/UserController");
const router = express.Router();


router.get('/actividadDocente', VerificoToken ,GetActividadDocente )

router.post('/ActualizarDocente', actulizarActividadDocente )


module.exports = router;
