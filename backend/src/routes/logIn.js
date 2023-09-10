const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { parser } = require("../Functions.js");
const { Roles, Estados } = require("../Roles.js");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("root");
});

//ingresar
router.post("/login", async (req, res) => {
  let user = req.body;

  user = parser(user);
  user = JSON.parse(user);

  //verifico nulo y vacio
  if (user.dni === null || user.contrasena === null) {
    return res.status(401).send("Unauhtorized Request");
  }

  try {
    
    const Element = await prisma.persona.findFirstOrThrow({
      where: { dni: user.dni },
    });
    let result = JSON.parse(parser(Element));

    //si no existe el usuario y si coinciden las contraseñas
    if (result == null || result.Contrase_a != user.contrasena) {
      return res.status(401).send("Unauhtorized Request");
    }

    const token = await jwt.sign({ _id: result.dni }, "keyregistro");
   
    return res.status(200).json({
      token: token,
      rol: result.IdRolfk,
    });
  } catch (e) {console.log(e.message)}
  
});

//regisrarse
router.post("/Signup", async (req, res) => {
  const {
    dni,
    Contrase_a,
    nombre,
    apellido,
    telefono,
    email,
    sexo,
    direccion,
  } = req.body;

  //verifico nulo y vacio
  if (
    dni === null ||
    Contrase_a === null ||
    telefono === null ||
    email === null ||
    direccion === null
  ) {
    return res.status(401).send("Unauhtorized Request");
  }
  console.log(Contrase_a);
  const NuevoUsario = await prisma.persona.create({
    data: {
      dni: dni,
      Contrase_a: Contrase_a,
      NombreCompleto: `${nombre}  ${apellido}`,
      telefono: telefono,
      email: email,
      sexo: sexo,
      IdRolfk: Roles.usuario,
      Direccion: direccion,
      estado: Estados.Permitido,
    },
  });
  console.log(NuevoUsario);
  const token = await jwt.sign({ _id: dni }, "keyregistro");
  //return res.status(200).json({ token: token , rol: Roles.usuario});
});

router.post("/test", (req, res) => {
  console.log("qqqqqqqqq");
  res.json({ pepe: "aaaaaaa" });
});

async function VerificoToken(res, req, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("no autorizado");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
      return res.status(401).send("Unauhtorized Request");
    }

    const payload = await jwt.verify(token, "secretkey");
    if (!payload) {
      return res.status(401).send("Unauhtorized Request");
    }
    req.userId = payload._id;
    next();
  } catch (e) {
    //console.log(e)
    return res.status(401).send("Unauhtorized Request");
  }
}
module.exports = router;
