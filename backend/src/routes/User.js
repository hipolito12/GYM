
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarActividades, DetalleActividad,VerificoToken,ReservarCupo} = require("../controllers/UserController");


router.post('/ProximoPago',VerificoToken, ProximoPago);


router.post('/ActualizaDatos',VerificoToken,ActualizarDatos);
 
router.post('/ListarActividades',VerificoToken,ListarActividades); 

router.post('/DetalleActividad',VerificoToken,DetalleActividad);

router.post('/ReservarCupo',VerificoToken,ReservarCupo)


module.exports = router;