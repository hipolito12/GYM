const express = require("express");
const { Roles, Estados } = require("../Roles.js");
const{LogInUser,Signup,VerificoToken} = require("../controllers/authController.js");


const router = express.Router();



//ingresar
router.post("/login", LogInUser);

 //regisrarse
router.post("/Signup", Signup);




module.exports = router;
