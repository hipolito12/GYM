const express = require("express");
const router = express.Router();
const{createBlog, getBlogs, getTipoPost,DeleteBlog, UpdateBlog}= require("../controllers/BlogController")


router.get("/Blogs",getBlogs)

router.get("/TipoBlog",getTipoPost)

module.exports = router;
