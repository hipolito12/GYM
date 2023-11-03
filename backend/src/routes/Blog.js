const express = require("express");
const router = express.Router();
const{createBlog, getBlogs, getTipoPost,deletes, UpdateBlog}= require("../controllers/BlogController")
const {VerificoToken} =require('../controllers/UserController') 


router.get("/Blogs",getBlogs)
router.get("/TipoBlog",getTipoPost)
router.post("/UpdateBlogs",UpdateBlog)
router.put("/CreateBlogs",VerificoToken,createBlog)

router.post("/DeleteBlogs",deletes)


module.exports = router;
