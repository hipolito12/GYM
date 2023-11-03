const express = require("express");
const router = express.Router();
const{createBlog, getBlogs, getTipoPost,deletes, UpdateBlog}= require("../controllers/BlogController")
const {VerificoToken} =require('../controllers/UserController') 

/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        idPost:
 *          type: integer
 *          description: id que identifica al post
 *        dniAutor:
 *          type: number
 *          description: dni del autor del post
 *        tipoPostFk:
 *          type: integer
 *          description: id que identifica al tipo de post
 *        titulo:
 *          type: string
 *          description: titulo del post
 *        cuerpo:
 *          type: string
 *          description: cuerpo del post
 *        imagen:
 *          type: string
 *          description: conjunto de url de las imagenes que usa el post
 *        fecha:
 *          type: string
 *          description: fecha de publicación del post
 *        visible:
 *          type: boolean
 *          description: indica si el post es visible(1) o no(0)
 *        persona:
 *          type: object
 *          description: persona que posee el post
 *        tipopost:
 *          type: object
 *          description: tipo de post
 *      required:
 *        - dniAutor
 *        - tipoPostFk
 *        - titulo
 *        - cuerpo
 *      example:
 *        dniAutor: 14725836
 *        tipoPostFk: 1
 *        titulo: Titulo largo
 *        cuerpo: Lorem ipsum...
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
 * /api/Blogs:
 *  get:
 *    summary: devuelve todos los posts
 *    tags: [Post]
 *    responses:
 *      200:
 *        description: todos los posts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post'
 *      500:
 *        description: Error al obtener los posts
 *    
 *    
 */
router.get("/Blogs",getBlogs)

/**
 * @swagger
 * /api/TipoBlog:
 *  get:
 *    summary: devuelve el tipo de post
 *    tags: [TipoPost]
 *    responses:
 *      200:
 *        description: tipo del post
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/TipoPost'
 *      500:
 *        description: Error al obtener el tipo de post
 *    
 *    
 */
router.get("/TipoBlog",getTipoPost)

/**
 * @swagger
 * /api/UpdateBlogs/{id}:
 *  put:
 *    summary: actualiza post
 *    tags: [Post]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del post
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: post actualizado!
 *      404:
 *        description: post no encontrado
 *    
 *    
 */
router.post("/UpdateBlogs",UpdateBlog)

/**
 * @swagger
 * /api/CreateBlogs:
 *  post:
 *    summary: crea un nuevo post
 *    tags: [Post]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: el post
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Post'
 *    
 */
router.put("/CreateBlogs",VerificoToken,createBlog)

/**
 * @swagger
 * /api/DeleteBlog/{id}:
 *  put:
 *    summary: borra un post
 *    tags: [Post]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del post
 *    responses:
 *      200:
 *        description: post borrado
 *      404:
 *        description: post no encontrado
 *    
 *    
 */
router.post("/DeleteBlogs",deletes)


module.exports = router;
