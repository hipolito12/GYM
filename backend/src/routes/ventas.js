const express= require('express');
const router = express.Router();
const {VerificoToken} = require('../controllers/UserController');
const {RegistrarVentas}=require('../controllers/ventasController');

/**
 * @swagger
 * components:
 *  schemas:
 *    Venta:
 *      type: object
 *      properties:
 *        codVenta:
 *          type: integer
 *          description: código que identifica a la venta
 *        trabajadorIDni:
 *          type: number
 *          description: dni que identifica al trabajador que efectuó la venta
 *        nombreProducto:
 *          type: string
 *          description: nombre del producto vendido
 *        precio:
 *          type: number
 *          description: precio de la venta
 *        cantidad:
 *          type: integer
 *          description: cantidad vendida del producto
 *        persona:
 *          type: object
 *          description: persona con la que está relacionada la venta
 *      required:
 *        - trabajadorIDni
 *        - nombreProducto
 *        - precio
 *        - cantidad
 *      example:
 *        trabajadorIDni: 12345678
 *        nombreProducto: Cocacola
 *        precio: 25
 *        cantidad: 5 
 */


/**
 * @swagger
 * /api/ventas:
 *  post:
 *    summary: crea una nueva venta
 *    tags: [Actividad]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Venta'
 *    responses:
 *      200:
 *        description: la actividad
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Venta'
 *    
 */
router.post('/ventas',VerificoToken,RegistrarVentas);

module.exports=router;