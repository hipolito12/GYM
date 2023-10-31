
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarRutinas, ListarDetalleRutina,VerificoToken} = require("../controllers/UserController");


router.post('/ProximoPago',VerificoToken, ProximoPago);
router.post('/ProximoPago', ProximoPago);

router.post('/ActualizaDatos',VerificoToken,ActualizarDatos);
 
router.post('/ListarRutinas',VerificoToken,ListarRutinas); 

router.post('/DetalleRutina',VerificoToken,ListarDetalleRutina);



module.exports = router;