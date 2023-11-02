const express = require('express');
const {
  GetAllRols,
  DeleteRols,
  CreateRols,
  UpdateRols,
  getRolById,
  getActiveRols,
} = require('../controllers/rolController');
const router = express.Router();

/**
 * @openapi
 * /api/v1/roles:
 *   get:
 *     tags:
 *       - Roles
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


router.get('/allRols', GetAllRols);
router.get('/ActiveRols', getActiveRols);
router.post('/createRol', CreateRols);

router.put('/updateRol/:id', UpdateRols);
router.get('/GetRolById/:id', getRolById);
router.put('/deleteRol/:id', DeleteRols);

module.exports = router;
