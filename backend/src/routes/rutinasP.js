const express = require('express');
const router = express.Router();
const {
  getAllRutinasP,
  getAllActividadesP,
  CreateRutinasP,
  UpdateRutinasP,
  getRutinaByIdP,
  getActiveRutinasP,
  DeleteRutinaP,
  checkDniExist,
} = require('../controllers/rutinasPController.js');

/**
 * @swagger
 * components:
 *  schemas:
 *    Rutina Personalizada:
 *      type: object
 *      properties:
 *        idRutinaPersonalizada:
 *          type: integer
 *          description: id que identifica a la rutina personalizada
 *        idActividadFk:
 *          type: integer
 *          description: id que identifica a la actividad de la rutina personalizada
 *        tipoRutinaFk:
 *          type: integer
 *          description: id que identifica al tipo de rutina personalizada
 *        personaDniFk:
 *          type: number
 *          description: dni de la persona propietaria de la rutina
 *        descripcionRutinaP:
 *          type: string
 *          description: descripcion de la rutina personalizada
 *        imagenes:
 *          type: string
 *          description: conjunto de url de las imágenes utilizadas para la rutina
 *        fechaActualización:
 *          type: string
 *          description: última fecha de actualización de la rutina personalizada
 *        activo:
 *          type: boolean
 *          description: indica si la rutina personalizada está activa(1) o no(0)
 *      required:
 *        - idRutinaPersonalizada
 *        - idActividadFk
 *        - tipoRutinaFk
 *        - personaDniFk
 *        - descripcionRutinaP
 *      example:
 *        idRutinaPersonalizada: 1
 *        idActividadFk: 3
 *        tipoRutinaFk: 1
 *        personaDniFk: 43349281
 *        descripcionRutinaP: Sentadilla con barra
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


// obtener rutinas personalizadas para mostrar

/**
 * @swagger
 * /api/AllRutinasP:
 *  get:
 *    summary: devuelve todas las rutinas personalizadas
 *    tags: [Rutina Personalizada]
 *    responses:
 *      200:
 *        description: todas las rutinas personalizadas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rutina Personalizada'
 *      500:
 *        description: Error al obtener las rutinas personalizadas
 *    
 *    
 */
router.get('/AllRutinasP', getAllRutinasP);

/**
 * @swagger
 * /api/AllActividadesP:
 *  get:
 *    summary: devuelve todas las actividades personalizadas
 *    tags: [Rutina Personalizada]
 *    responses:
 *      200:
 *        description: todas las actividades personalizadas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Actividad'
 *      500:
 *        description: Error al obtener las actividades personalizadas
 *    
 *    
 */
router.get('/AllActividadesP', getAllActividadesP);

/**
 * @swagger
 * /api/createRutinaP:
 *  post:
 *    summary: crea una nueva rutina personalizada
 *    tags: [Rutina Personalizada]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rutina Personalizada'
 *    responses:
 *      200:
 *        description: la rutina personalizada
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rutina Personalizada'
 *    
 */
router.post('/createRutinaP', CreateRutinasP);

/**
 * @swagger
 * /api/updateRutinaP/{id}:
 *  put:
 *    summary: actualiza rutina personalizada
 *    tags: [Rutina Personalizada]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina personalizada
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rutina Personalizada'
 *    responses:
 *      200:
 *        description: rutina personalizada actualizada!
 *      404:
 *        description: rutina personalizada no encontrada
 *    
 *    
 */
router.put('/updateRutinaP/:id', UpdateRutinasP);

/**
 * @swagger
 * /api/getRutinaByIdP/{id}:
 *  get:
 *    summary: devuelve una rutina personalizada
 *    tags: [Rutina Personalizada]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina personalizada
 *    responses:
 *      200:
 *        description: la rutina personalizada
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rutina Personalizada'
 *      404:
 *        description: rutina personalizada no encontrada
 *    
 *    
 */
router.get('/GetRutinaByIdP/:id', getRutinaByIdP);

/**
 * @swagger
 * /api/ActiveRutinasP:
 *  get:
 *    summary: devuelve todas las rutinas personalizadas activas
 *    tags: [Rutina Personalizada]
 *    responses:
 *      200:
 *        description: todas las rutinas personalizadas activas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rutina Personalizada'
 *      500:
 *        description: Error al obtener las rutinas personalizadas activas
 *    
 *    
 */
router.get('/ActiveRutinasP', getActiveRutinasP);

/**
 * @swagger
 * /api/deleteRutinaP/{id}:
 *  put:
 *    summary: borra una rutina personalizada
 *    tags: [Rutina Personalizada]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina personalizada
 *    responses:
 *      200:
 *        description: rutina personalizada borrada!
 *      404:
 *        description: rutina personalizada no encontrada
 *    
 *    
 */
router.put('/deleteRutinaP/:id', DeleteRutinaP);


router.get('/checkDniExist/:dni', checkDniExist);

module.exports = router;
