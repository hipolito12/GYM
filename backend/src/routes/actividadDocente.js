const express = require('express');
const { GetActividadDocente, actulizarActividadDocente}= require('../controllers/actividadDocenteController');
const {VerificoToken} = require("../controllers/UserController");
const router = express.Router();

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
 * /api/actividadDocente/{id}:
 *  get:
 *    summary: devuelve la actividad que da determinado docente
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
 *        description: la actividad que da el docente
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
router.get('/actividadDocente', VerificoToken ,GetActividadDocente )

/**
 * @swagger
 * /api/updateActividad/{id}:
 *  put:
 *    summary: actualiza la actividad que da determinado docente
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
 *        description: actividad del docente actualizada!
 *      404:
 *        description: actividad del docente no encontrada
 *    
 *    
 */
router.post('/ActualizarDocente', actulizarActividadDocente )


module.exports = router;
