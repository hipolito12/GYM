const express = require("express");
const{LogInUser,Signup} = require("../controllers/authController.js");


const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        dni:
 *          type: number
 *          description: dni del usuario
 *        idRolFk:
 *          type: integer
 *          description: id que identifica al rol del usuario
 *        rutinasFk:
 *          type: integer
 *          description: rutinas del usuario
 *        email:
 *          type: string
 *          description: email del usuario
 *        password:
 *          type: string
 *          description: contraseña del usuario
 *        nombreCompleto:
 *          type: string
 *          description: nombre completo del usuario
 *        sexo:
 *          type: string
 *          description: sexo del usuario
 *        telefono:
 *          type: string
 *          description: teléfono del usuario
 *        direccion:
 *          type: string
 *          description: dirección del usuario
 *        estado:
 *          type: boolean
 *          description: indica el estado del usuario, activo(1) o inactivo(2)
 *        asistencia:
 *          type: array
 *          description: asistencias del usuario
 *        cuota:
 *          type: array
 *          description: cuotas del usuario
 *        rol:
 *          type: object
 *          description: rol del usuario
 *        personaacargoactividad:
 *          type: object
 *          description: persona a cargo de la actividad ?
 *        post:
 *          type: array
 *          description: posts del usuario
 *        rutinapersonalizada:
 *          type: array
 *          description: rutinas personalizadas del usuario
 *        venta:
 *          type: array
 *          description: ventas efectuadas por el usuario
 *      required:
 *        - dni          
 *        - idRolFk
 *        - email
 *        - password
 *        - nombreCompleto
 *        - sexo
 *        - telefono
 *        - direccion
 *        - estado
 *      example:
 *        dni: 44630535
 *        idRolFk: 2
 *        email: email@gmail.com
 *        password: LAcontraseña
 *        nombreCompleto: John Doe
 *        sexo: masculino
 *        telefono: 3425679812
 *        direccion: rioja 334
 *        estado: 1   
 */




//ingresar

/**
 * @swagger
 * /api/login:
 *  get:
 *    summary: verifica e informa si las credenciales del usuario son o no correctas
 *    tags: [User]
 *    responses:
 *      200:
 *        description: usuario correcto
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      500:
 *        description: Usuario incorrecto
 *    
 *    
 */
router.post("/login", LogInUser);

 

//regisrarse

 /**
 * @swagger
 * /api/login:
 *  get:
 *    summary: verifica e informa si las credenciales del usuario para registrarse son o no correctas
 *    tags: [User]
 *    responses:
 *      200:
 *        description: usuario registrado
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      500:
 *        description: Usuario incorrecto
 *    
 *    
 */
router.post("/Signup", Signup);

module.exports = router;
