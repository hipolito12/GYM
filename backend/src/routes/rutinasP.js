const express = require('express');
const router = express.Router();
const {
  getAllRutinasP,
  getAllActividadesP,
  CreateRutinasP,
  UpdateRutinasP,
  getRutinaByIdP,
  getActiveRutinasP,
  DeleteRutinaP,
  checkDniExist,
} = require('../controllers/rutinasPController.js');

/**
 * @openapi
 * /api/v1/rutinasP:
 *   get:
 *     tags:
 *       - RutinasP
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
router.get('/AllRutinasP', getAllRutinasP);
router.get('/AllActividadesP', getAllActividadesP);
router.post('/createRutinaP', CreateRutinasP);
router.put('/updateRutinaP/:id', UpdateRutinasP);
router.get('/GetRutinaByIdP/:id', getRutinaByIdP);
router.get('/ActiveRutinasP', getActiveRutinasP);
router.put('/deleteRutinaP/:id', DeleteRutinaP);
router.get('/checkDniExist/:dni', checkDniExist);

module.exports = router;
