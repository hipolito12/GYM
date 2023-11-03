const express = require("express");
const router = express.Router();
const {VerificoToken}=require("../controllers/UserController.js");
const{getMisRutinasController,getRutinasGenericasController}= require('../controllers/MisRutinasController.js')


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


/**
 * @swagger
 * /api/misRutinas/{id}:
 *  get:
 *    summary: devuelve las rutinas personalizadas del usuario
 *    tags: [Rutina Personalizada]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 *    responses:
 *      200:
 *        description: las rutinas personalizadas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              $ref: '#/components/schemas/Rutina Personalizada'
 *      404:
 *        description: rutinas personalizadas no encontradas
 *    
 *    
 */
router.post("/misrutinas",VerificoToken,getMisRutinasController )

/**
 * @swagger
 * /api/rutinasGenericas:
 *  get:
 *    summary: devuelve todas las rutinas genericas
 *    tags: [Actividad]
 *    responses:
 *      200:
 *        description: todas las rutinas genericas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rutina'
 *      500:
 *        description: Error al obtener las rutinas genericas
 *    
 *    
 */
router.get("/rutinasGenericas", getRutinasGenericasController)



module.exports = router;