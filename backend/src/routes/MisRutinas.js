const express = require("express");
const router = express.Router();
const {VerificoToken}=require("../controllers/UserController.js");
const{getMisRutinasController,getRutinasGenericasController}= require('../controllers/MisRutinasController.js')

/**
 * @openapi
 * /api/v1/MisRutinas:
 *   get:
 *     tags:
 *       - Mis Rutinas
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

router.post("/misrutinas",VerificoToken,getMisRutinasController )


router.get("/rutinasGenericas", getRutinasGenericasController)



module.exports = router;