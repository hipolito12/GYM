
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarRutinas, ListarRutina} = require("../controllers/UserController");

router.post('/ProximoPago', ProximoPago);

router.post('/ActualizaDatos',ActualizarDatos);
 
router.post('/ListarRutinas',ListarRutinas); 


module.exports = router;