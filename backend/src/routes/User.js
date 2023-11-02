
const express = require("express");
const router = express.Router();
const {ProximoPago, ActualizarDatos, ListarActividades, DetalleActividad,VerificoToken,ReservarCupo} = require("../controllers/UserController");

/**
 * @openapi
 * /api/v1/User:
 *   get:
 *     tags:
 *       - User
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


router.post('/ProximoPago',VerificoToken, ProximoPago);


router.post('/ActualizaDatos',VerificoToken,ActualizarDatos);
 
router.post('/ListarActividades',VerificoToken,ListarActividades); 

router.post('/DetalleActividad',VerificoToken,DetalleActividad);

router.post('/ReservarCupo',VerificoToken,ReservarCupo)


module.exports = router;