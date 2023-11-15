const express = require("express");
const router = express.Router();
const{getAll, creates,  deletes, updates, getById}= require("../controllers/personaACargoActividadController");

router.get("/personasACargoActividad", getAll)
router.post("/createPersonaACargoActividad", creates)
router.get("/getPersonaACargoActividadById/:id", getById)
router.delete("/deletePersonaACargoActividad/:id", deletes)
router.patch("/updatePersonaACargoActividad/:id", updates)

module.exports = router;
