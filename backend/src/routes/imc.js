const express = require('express')
const{VerificoToken} = require('../controllers/UserController.js')
const {obtenerSexo} = require('../controllers/imcController.js')
Router= express.Router()

/**
 * @openapi
 * /api/v1/imc:
 *   get:
 *     tags:
 *       - IMC
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

Router.post('/imc',VerificoToken,obtenerSexo )

module.exports = Router