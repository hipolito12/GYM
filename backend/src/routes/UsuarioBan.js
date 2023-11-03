const express = require('express')
const router = express.Router()
const { ObtenerUsuarioInhabilitado,ObtenerUsuarioHabilitado,Banear,Habilitar } = require('../controllers/UsuarioBanController')



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
 */



/**
 * @swagger
 * /api/UsuariosInhabilitados:
 *  get:
 *    summary: devuelve todos los usuarios inhabilitados
 *    tags: [User]
 *    responses:
 *      200:
 *        description: usuario inhabilitados
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      500:
 *        description: Error al obtener los usuarios inhabilitados
 *    
 *    
 */
router.get('/UsuariosInhabilitados',  ObtenerUsuarioInhabilitado)


/**
 * @swagger
 * /api/UsuariosHabilitados:
 *  get:
 *    summary: devuelve todos los usuarios habilitados
 *    tags: [User]
 *    responses:
 *      200:
 *        description: usuario habilitados
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      500:
 *        description: Error al obtener los usuarios habilitados
 *    
 *    
 */
router.get('/UsuariosHabilitados', ObtenerUsuarioHabilitado )


/**
 * @swagger
 * /api/Deshabilitar/{dni}:
 *  put:
 *    summary: banea a determinado usuario 
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
 *        description: usuario baneado!
 *      404:
 *        description: usuario no encontrado
 *    
 *    
 */
router.post('/Deshabilitar', Banear )



/**
 * @swagger
 * /api/Habilitar/{dni}:
 *  put:
 *    summary: habilita a determinado usuario 
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
 *        description: usuario habilitado!
 *      404:
 *        description: usuario no encontrado
 *    
 *    
 */
router.post('/Habilitar', Habilitar )

module.exports = router;