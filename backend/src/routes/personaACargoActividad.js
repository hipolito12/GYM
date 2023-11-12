const express = require("express");
const router = express.Router();
const{getAll, creates,  deletes, updates, getById}= require("../controllers/personaACargoActividadController");

router.get("/personasACargoActividad", getAll)
router.get("/createPersonaACargoActividad", creates)
router.post("/getPersonaACargoActividadById/:id", getById)
router.post("/deletePersonaACargoActividad/:id", deletes)
router.post("/updatePersonaACargoActividad/:id", updates)

module.exports = router;
