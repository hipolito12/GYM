const express = require("express");
const router = express.Router();
const {VerificoToken}=require("../controllers/UserController.js");
const{getMisRutinasController,getRutinasGenericasController}= require('../controllers/MisRutinasController.js')

router.post("/misrutinas",VerificoToken,getMisRutinasController )


router.get("/rutinasGenericas", getRutinasGenericasController)



module.exports = router;