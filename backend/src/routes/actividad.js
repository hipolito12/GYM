const express = require('express');
const router = express.Router();
const {
  getAllActividades,
  CreateActividades,
  UpdateActividades,
  GetActividadById,
  DeleteActividad,
} = require('../controllers/ActividadController.js');

// obtener actividades para mostrar


/**
 * @swagger
 * components:
 *  schemas:
 *    Actividad:
 *      type: object
 *      properties:
 *        actividadId:
 *          type: integer
 *          description: id que identifica a la actividad
 *        nombre:
 *          type: string
 *          description: nombre de la actividad
 *        turno:
 *          type: string
 *          description: turno de la actividad
 *        hora_inicio:
 *          type: string
 *          description: hora de inicio de la actividad
 *        activa:
 *          type: boolean
 *          description: indicador de si la actividad está activa(1) o no(0)
 *        hora_fin:
 *          type: string
 *          description: hora de fin de la actividad
 *        descripcion:
 *          type: string
 *          description: descripción de la actividad
 *        cupo:
 *          type: integer
 *          description: cantidad de lugares libres
 *        asistencia:
 *          type: array
 *          description: registro de asistencia de la actividad
 *        personaacargoacttividad:
 *          type: array
 *          description: registro de personas que estuvieron a cargo de la actividad
 *        rutinagenerica:
 *          type: array
 *          description: rutinas genericas de la actividad
 *        rutinapersonalizada:
 *          type: array
 *          description: rutinas personalizadas de la actividad
 *      required:
 *        - nombre
 *        - turno
 *        - hora_inicio
 *        - activa
 *        - hora_fin
 *        - descripcion
 *        - cupo
 *      example:
 *        nombre: Boxeo
 *        turno: noche
 *        hora_inicio: 14:00
 *        activa: 1
 *        hora_fin: 16:00
 *        descripcion: El boxeo es un deporte de combate en el que dos personas se enfrentan en un ring, con el objetivo de golpear al oponente con los puños y evitar ser golpeado. Es un deporte antiguo que ha evolucionado a lo largo de los años en términos de reglas, técnicas y equipamiento.
 *        cupo: 5  
 */




/**
 * @swagger
 * /api/ActiveActividades:
 *  get:
 *    summary: devuelve todas las actividades activas
 *    tags: [Actividad]
 *    responses:
 *      200:
 *        description: todas las actividades activas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Actividad'
 *      500:
 *        description: Error al obtener las actividades activas
 *    
 *    
 */
router.get('/ActiveActividades', getAllActividades);


/**
 * @swagger
 * /api/createActividad:
 *  post:
 *    summary: crea una nueva actividad
 *    tags: [Actividad]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Actividad'
 *    responses:
 *      200:
 *        description: la actividad
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Actividad'
 *    
 */
router.post('/createActividad', CreateActividades);


/**
 * @swagger
 * /api/updateActividad/{id}:
 *  put:
 *    summary: actualiza actividad
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
 *        description: actividad actualizada!
 *      404:
 *        description: actividad no encontrada
 *    
 *    
 */
router.put('/updateActividad/:id', UpdateActividades);


/**
 * @swagger
 * /api/getActividadById/{id}:
 *  get:
 *    summary: devuelve una actividad
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la actividad
 *    responses:
 *      200:
 *        description: la actividad
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Actividad'
 *      404:
 *        description: actividad no encontrada
 *    
 *    
 */
router.get('/getActividadById/:id', GetActividadById);


/**
 * @swagger
 * /api/deleteActividad/{id}:
 *  put:
 *    summary: borra una actividad
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la actividad
 *    responses:
 *      200:
 *        description: actividad borrada
 *      404:
 *        description: actividad no encontrada
 *    
 *    
 */
router.put('/deleteActividad/:id', DeleteActividad);

module.exports = router;
