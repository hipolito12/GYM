const express = require('express');
const router = express.Router();
const {
  getAllRutinas,
  getAllActividades,
  CreateRutinas,
  UpdateRutinas,
  getRutinaById,
  getActiveRutinas,
  DeleteRutina,
} = require('../controllers/rutinasController.js');

/**
 * @openapi
 * /api/v1/rutinas:
 *   get:
 *     tags:
 *       - Rutinas
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
router.get('/AllRutinas', getAllRutinas);
router.get('/AllActividades', getAllActividades);
router.post('/createRutina', CreateRutinas);
router.put('/updateRutina/:id', UpdateRutinas);
router.get('/GetRutinaById/:id', getRutinaById);
router.get('/ActiveRutinas', getActiveRutinas);
router.put('/deleteRutina/:id', DeleteRutina);

module.exports = router;
