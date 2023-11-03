const express = require('express');
const {
  GetAllRols,
  DeleteRols,
  CreateRols,
  UpdateRols,
  getRolById,
  getActiveRols,
} = require('../controllers/rolController');
const router = express.Router();



/**
 * @swagger
 * components:
 *  schemas:
 *    Rol:
 *      type: object
 *      properties:
 *        idRol:
 *          type: integer
 *          description: id que identifica al rol
 *        nombreRol:
 *          type: string
 *          description: nombre del rol    
 *        descripcion:
 *          type: string
 *          description: descripción del rol
 *        activa:
 *          type: boolean
 *          description: indicador de si el rol está activo(1) o no(0)
 *        persona:
 *          type: array
 *          description: personas que ejercen el rol
 *      required:
 *        - nombreRol
 *        - descripcion
 *      example:
 *        nombre: usuario
 *        descripcion: haceCosasDeUsuario
 */


/**
 * @swagger
 * /api/allRols:
 *  get:
 *    summary: devuelve todos los roles
 *    tags: [Rol]
 *    responses:
 *      200:
 *        description: todos los roles
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rol'
 *      500:
 *        description: Error al obtener los roles
 *    
 *    
 */
router.get('/allRols', GetAllRols);


/**
 * @swagger
 * /api/ActiveRols:
 *  get:
 *    summary: devuelve todos los roles activos
 *    tags: [Rol]
 *    responses:
 *      200:
 *        description: todos los roles activos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rol'
 *      500:
 *        description: Error al obtener los roles activos
 *    
 *    
 */
router.get('/ActiveRols', getActiveRols);


/**
 * @swagger
 * /api/createRol:
 *  post:
 *    summary: crea un nuevo rol
 *    tags: [Rol]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rol'
 *    responses:
 *      200:
 *        description: el rol
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rol'
 *    
 */
router.post('/createRol', CreateRols);


/**
 * @swagger
 * /api/updateRol/{id}:
 *  put:
 *    summary: actualiza rol
 *    tags: [Rol]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del rol
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Rol'
 *    responses:
 *      200:
 *        description: rol actualizado!
 *      404:
 *        description: rol no encontrado
 *    
 *    
 */
router.put('/updateRol/:id', UpdateRols);

/**
 * @swagger
 * /api/getRolById/{id}:
 *  get:
 *    summary: devuelve un rol
 *    tags: [Rol]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del rol
 *    responses:
 *      200:
 *        description: el rol
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Rol'
 *      404:
 *        description: rol no encontrado
 *    
 *    
 */
router.get('/GetRolById/:id', getRolById);

/**
 * @swagger
 * /api/deleteRol/{id}:
 *  put:
 *    summary: borra un rol
 *    tags: [Rol]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del rol
 *    responses:
 *      200:
 *        description: rol borrado
 *      404:
 *        description: rol no encontrado
 *    
 *    
 */
router.put('/deleteRol/:id', DeleteRols);

module.exports = router;
