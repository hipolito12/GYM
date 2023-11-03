
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarActividades, DetalleActividad,VerificoToken,ReservarCupo} = require("../controllers/UserController");

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
 * /api/ProximoPago/{dni}:
 *  get:
 *    summary: devuelve una cuota
 *    tags: [Cuota]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el dni del usuario
 *    responses:
 *      200:
 *        description: la cuota
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Cuota'
 *      404:
 *        description: Cuota para este usuario no encontrada
 *    
 *    
 */
router.post('/ProximoPago',VerificoToken, ProximoPago);


/**
 * @swagger
 * /api/ActualizaDatos/{dni}:
 *  put:
 *    summary: actualiza datos del usuario
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el dni del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: usuario actualizado!
 *      404:
 *        description: usuario no encontrado
 *    
 *    
 */
router.post('/ActualizaDatos',VerificoToken,ActualizarDatos);


/**
 * @swagger
 * /api/ListarActividades:
 *  get:
 *    summary: devuelve todas las actividades con los profesores que las dictan
 *    tags: [Actividad]
 *    responses:
 *      200:
 *        description: todas las actividades con sus respectivos profesores
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Actividad'
 *      500:
 *        description: Error al obtener las actividades 
 *    
 *    
 */
router.post('/ListarActividades',VerificoToken,ListarActividades); 


/**
 * @swagger
 * /api/DetalleActividad/{id}:
 *  put:
 *    summary: busca y muestra el detalle de determinada actividad
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la actividad
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Actividad'
 *    responses:
 *      200:
 *        description: actividad encontrada y mostrada
 *      404:
 *        description: actividad no encontrada
 *    
 *    
 */
router.post('/DetalleActividad',VerificoToken,DetalleActividad);


/**
 * @swagger
 * /api/ReservarCupo/{id}:
 *  put:
 *    summary: actualiza el cupo de determinada actividad
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la actividad
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Actividad'
 *    responses:
 *      200:
 *        description: cupo de la actividad actualizado!
 *      404:
 *        description: actividad no encontrada
 *    
 *    
 */
router.post('/ReservarCupo',VerificoToken,ReservarCupo)


module.exports = router;