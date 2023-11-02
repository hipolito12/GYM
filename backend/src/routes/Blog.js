const express = require("express");
const router = express.Router();
const{createBlog, getBlogs, getTipoPost,DeleteBlog, UpdateBlog}= require("../controllers/BlogController")

/**
 * @openapi
 * /api/v1/blog:
 *   get:
 *     tags:
 *       - Blog
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

router.get("/Blogs",getBlogs)

router.get("/TipoBlog",getTipoPost)

module.exports = router;
