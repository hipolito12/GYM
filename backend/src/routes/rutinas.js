const express = require('express');
const router = express.Router();
const {
  CreateRutinas,
  UpdateRutinas,
  getRutinaById,
  getActiveRutinas,
  DeleteRutina,
} = require('../controllers/rutinasController.js');


/**
 * @swagger
 * components:
 *  schemas:
 *    Rutina:
 *      type: object
 *      properties:
 *        idRutinaGenerica:
 *          type: integer
 *          description: id que identifica a la rutina generica
 *        actividadFk:
 *          type: integer
 *          description: id que identifica a la actividad de la rutina generica
 *        descripcionRutina:
 *          type: string
 *          description: descripcion de la rutina generica
 *        tipoRutinaFk:
 *          type: integer
 *          description: id que identifica al tipo de rutina generica
 *        fechaActualizacion:
 *          type: string
 *          description: última fecha de actualización de la rutina
 *        activa:
 *          type: boolean
 *          description: indica si la rutina generica está activa(1) o no(0)
 *      required:
 *        - idRutinaGenerica
 *        - actividadFk
 *        - descripcionRutina
 *        - tipoRutinaFk
 *      example:
 *        idRutinaGenerica: 1
 *        actividadFk: 3
 *        descripcionRutina: Día 1, Entrenamiento de la parte superior del cuerpo...
 *        tipoRutinaFk: 1
 */



// obtener rutinas para mostrar

/**
 * @swagger
 * /api/ActiveRutinas:
 *  get:
 *    summary: devuelve todas las rutinas activas
 *    tags: [Rutina]
 *    responses:
 *      200:
 *        description: todas las rutinas activas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rutina'
 *      500:
 *        description: Error al obtener las rutinas activas
 *    
 *    
 */
router.get('/ActiveRutinas', getActiveRutinas);


/**
 * @swagger
 * /api/createRutina:
 *  post:
 *    summary: crea una nueva rutina
 *    tags: [Rutina]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rutina'
 *    responses:
 *      200:
 *        description: la rutina
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rutina'
 *    
 */
router.post('/createRutina', CreateRutinas);

/**
 * @swagger
 * /api/updateRutina/{id}:
 *  put:
 *    summary: actualiza rutina
 *    tags: [Rutina]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rutina'
 *    responses:
 *      200:
 *        description: rutina actualizada
 *      404:
 *        description: rutina no encontrada
 *    
 *    
 */
router.put('/updateRutina/:id', UpdateRutinas);

/**
 * @swagger
 * /api/getRutinaById/{id}:
 *  get:
 *    summary: devuelve una rutina
 *    tags: [Rutina]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina
 *    responses:
 *      200:
 *        description: la rutina
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rutina'
 *      404:
 *        description: rutina no encontrada
 *    
 *    
 */
router.get('/GetRutinaById/:id', getRutinaById);

/**
 * @swagger
 * /api/deleteRutina/{id}:
 *  put:
 *    summary: borra una rutina
 *    tags: [Rutina]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la rutina
 *    responses:
 *      200:
 *        description: rutina borrada
 *      404:
 *        description: rutina no encontrada
 *    
 *    
 */
router.put('/deleteRutina/:id', DeleteRutina);

module.exports = router;
