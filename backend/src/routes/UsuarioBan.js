const express = require('express')
const router = express.Router()
const { ObtenerUsuarioInhabilitado,ObtenerUsuarioHabilitado,Banear,Habilitar } = require('../controllers/UsuarioBanController')

router.get('/UsuariosInhabilitados',  ObtenerUsuarioInhabilitado)

router.get('/UsuariosHabilitados', ObtenerUsuarioHabilitado )

router.post('/Deshabilitar', Banear )

router.post('/Habilitar', Habilitar )

module.exports = router;