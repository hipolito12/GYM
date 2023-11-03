const express = require('express')
const{VerificoToken} = require('../controllers/UserController.js')
const {obtenerSexo} = require('../controllers/imcController.js')
Router= express.Router()

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
 *    Cuota:
 *      type: object
 *      properties:
 *        codCuota:
 *          type: integer
 *          description: id que identifica a la actividad
 *        dniFk:
 *          type: string
 *          description: nombre de la actividad
 *        fechaPago:
 *          type: string
 *          description: turno de la actividad
 *        precioActual:
 *          type: string
 *          description: hora de inicio de la actividad
 *        persona:
 *          type: boolean
 *          description: indicador de si la actividad está activa(1) o no(0)
 *        preciocuota:
 *          type: string
 *          description: hora de fin de la actividad
 *      required:
 *        - codCuota
 *        - dniFk
 *        - fechaPago
 *        - precioActual
 *      example:
 *        codCuota: 1
 *        dniFk: 43349281
 *        fechaPago: 2023-09-28 14:30:45.000000
 *        precioActual: 10 
 */



/**
 * @swagger
 * /api/imc/{id}:
 *  get:
 *    summary: devuelve sexo del usuario
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 *    responses:
 *      200:
 *        description: sexo del usuario
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              $ref: '#/components/schemas/User/sexo'
 *      404:
 *        description: sexo del usuario no encontrada
 *    
 *    
 */
Router.post('/imc',VerificoToken,obtenerSexo )

module.exports = Router