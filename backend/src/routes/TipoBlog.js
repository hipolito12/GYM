
const express = require("express");
const router = express.Router();
const {TipoBlogController, CreateTipoBlogController ,UpdateTipoBlogController,DeleteOneTipoBlogController,DeleteAllBlogController} = require("../controllers/TipoBlogController");

/**
 * @swagger
 * components:
 *  schemas:
 *    TipoPost:
 *      type: object
 *      properties:
 *        tipoId:
 *          type: integer
 *          description: id que identifica al tipo de post
 *        nombreTipo:
 *          type: string
 *          description: nombre del tipo de post   
 *        visible:
 *          type: boolean
 *          description: indicador de si el rol está activo(1) o no(0)
 *        post:
 *          type: array
 *          description: el/los posts que es/son de este tipo de post
 *      required:
 *        - nombreTipo
 *      example:
 *        nombreTipo: Hábitos saludables
 */


/**
 * @swagger
 * /api/obtenerTipoBlog:
 *  get:
 *    summary: devuelve todos los tipos de post
 *    tags: [TipoPost]
 *    responses:
 *      200:
 *        description: todos los tipos de post
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Rol'
 *      500:
 *        description: Error al obtener los tipos de post
 *    
 *    
 */
router.get("/obtenerTipoBlog", TipoBlogController )

/**
 * @swagger
 * /api/crearTipoBlog:
 *  post:
 *    summary: crea un nuevo tipo de post
 *    tags: [TipoPost]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/TipoPost'
 *    responses:
 *      200:
 *        description: el tipo de post
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/TipoPost'
 *    
 */
router.put("/crearTipoBlog",CreateTipoBlogController  )

/**
 * @swagger
 * /api/actualizarTipoBlog/{id}:
 *  put:
 *    summary: actualiza tipo de post
 *    tags: [TipoPost]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del tipo de post
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/TipoPost'
 *    responses:
 *      200:
 *        description: tipo de post actualizado!
 *      404:
 *        description: tipo de post no encontrado
 *    
 *    
 */
router.post("/actualizarTipoBlog", UpdateTipoBlogController )

/**
 * @swagger
 * /api/eliminarTipoBlog/{id}:
 *  put:
 *    summary: borra un tipo de post
 *    tags: [Rol]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del tipo de post
 *    responses:
 *      200:
 *        description: tipo de post borrado
 *      404:
 *        description: tipo de post no encontrado
 *    
 *    
 */
router.post("/eliminarTipoBlog", DeleteOneTipoBlogController )

/**
 * @swagger
 * /api/eliminarBlogs/{id}:
 *  put:
 *    summary: borra los blogs cuyo id de tipo de post es el indicado
 *    tags: [Post]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del tipo de post
 *    responses:
 *      200:
 *        description: post borrado
 *      404:
 *        description: post no encontrado
 *    
 *    
 */
router.post("/eliminarBlogs",DeleteAllBlogController  )


module.exports = router;
