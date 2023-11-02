const express = require('express');
const router = express.Router();
const {
  getAllActividades,
  CreateActividades,
  UpdateActividades,
  GetActividadById,
  DeleteActividad,
} = require('../controllers/ActividadController.js');


/**
 * @openapi
 * /api/v1/actividades:
 *   get:
 *     tags:
 *       - Actividades
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


// obtener rutinas para mostrar
router.get('/ActiveActividades', getAllActividades);
router.post('/createActividad', CreateActividades);
router.put('/updateActividad/:id', UpdateActividades);
router.get('/getActividadById/:id', GetActividadById);
router.put('/deleteActividad/:id', DeleteActividad);

module.exports = router;
