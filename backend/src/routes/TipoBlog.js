
const express = require("express");
const router = express.Router();
const {TipoBlogController, CreateTipoBlogController ,UpdateTipoBlogController,DeleteOneTipoBlogController,DeleteAllBlogController} = require("../controllers/TipoBlogController");
const { validateCreate, validateUpdate, validateDelete } = require('../validators/TipoBlog')


router.get("/obtenerTipoBlog", TipoBlogController )
router.put("/crearTipoBlog", validateCreate, CreateTipoBlogController  )
router.post("/actualizarTipoBlog", validateUpdate, UpdateTipoBlogController )
router.post("/eliminarTipoBlog", validateDelete, DeleteOneTipoBlogController )
router.post("/eliminarBlogs",DeleteAllBlogController  )

module.exports = router;
