const express = require('express')
const{VerificoToken} = require('../controllers/UserController.js')
const {obtenerSexo} = require('../controllers/imcController.js')
Router= express.Router()



Router.post('/imc',VerificoToken,obtenerSexo )

module.exports = Router