const express = require('express');
const router = express.Router();
const {InformacionPago,RegistraPago}= require('../controllers/pagoCuotaController');


/**
 * @swagger
 * components:
 *  schemas:
 *    Cuota:
 *      type: object
 *      properties:
 *        codCuota:
 *          type: integer
 *          description: id que identifica a la actividad
 *        dniFk:
 *          type: string
 *          description: nombre de la actividad
 *        fechaPago:
 *          type: string
 *          description: turno de la actividad
 *        precioActual:
 *          type: string
 *          description: hora de inicio de la actividad
 *        persona:
 *          type: boolean
 *          description: indicador de si la actividad está activa(1) o no(0)
 *        preciocuota:
 *          type: string
 *          description: hora de fin de la actividad
 *      required:
 *        - codCuota
 *        - dniFk
 *        - fechaPago
 *        - precioActual
 *      example:
 *        codCuota: 1
 *        dniFk: 43349281
 *        fechaPago: 2023-09-28 14:30:45.000000
 *        precioActual: 10
 */



/**
 * @swagger
 * /api/pagarCuota/{dni}:
 *  get:
 *    summary: devuelve el valor de la cuota
 *    tags: [Actividad]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el dni del usuario que deve pagar la cuota
 *    responses:
 *      200:
 *        description: la cuota
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Cuota'
 *      404:
 *        description: cuota no encontrada
 *    
 *    
 */
router.post('/pagarCuota', InformacionPago)


/**
 * @swagger
 * /api/RegistrarPago:
 *  post:
 *    summary: registra el pago 
 *    tags: [Cuota]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Cuota'
 *    responses:
 *      200:
 *        description: la cuota
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Cuota'
 *    
 */
router.post('/RegistrarPago', RegistraPago)

module.exports = router;
