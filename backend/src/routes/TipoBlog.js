
const express = require("express");
const router = express.Router();
const {TipoBlogController, CreateTipoBlogController ,UpdateTipoBlogController,DeleteOneTipoBlogController,DeleteAllBlogController} = require("../controllers/TipoBlogController");

router.get("/obtenerTipoBlog", TipoBlogController )
router.put("/crearTipoBlog",CreateTipoBlogController  )
router.post("/actualizarTipoBlog", UpdateTipoBlogController )
router.post("/eliminarTipoBlog", DeleteOneTipoBlogController )
router.post("/eliminarBlogs",DeleteAllBlogController  )

module.exports = router;
