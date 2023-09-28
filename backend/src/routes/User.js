
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarRutinas, ListarRutina,VerificoToken} = require("../controllers/UserController");

router.post('/ProximoPago',VerificoToken, ProximoPago);

router.post('/ActualizaDatos',VerificoToken,ActualizarDatos);
 
router.post('/ListarRutinas',VerificoToken,ListarRutinas); 

router.Post('/DetalleRutina',VerificoToken,ListarRutina);



module.exports = router;