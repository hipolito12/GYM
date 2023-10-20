const express= require('express');
const router = express.Router();
const {VerificoToken} = require('../controllers/UserController');
const {RegistrarVentas}=require('../controllers/ventasController');


router.post('/ventas',VerificoToken,RegistrarVentas);

module.exports=router;