const express = require('express');
const router = express.Router();
const {GetAll, NuevoEmpleado, ModificarEmpleado, BorrarEmpleado,BorrarEmpleadoEnActividad,ObtenerRoles} = require("../controllers/GestionEmpleadosController");

router.get('/AllEmpleados',GetAll)


router.put('/AddEmpleado',NuevoEmpleado)


router.post('/UpdateEmpleado',ModificarEmpleado)

router.post('/DeleteEmpleado',BorrarEmpleado)

router.post('/DeleteEmpleadosEnActividad',BorrarEmpleadoEnActividad)
router.get('/TiposRol',ObtenerRoles)


module.exports = router;