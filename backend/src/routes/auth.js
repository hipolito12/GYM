const express = require("express");
const{LogInUser,Signup} = require("../controllers/authController.js");


const router = express.Router();



//ingresar
router.post("/login", LogInUser);

 //regisrarse
router.post("/Signup", Signup);




module.exports = router;
