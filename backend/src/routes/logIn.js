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
router.post("/logIn", async (req, res) => {
  // const { dni, password } = req.body;
  let user = req.body;
  console.log(user);
  user = parser(user);
  user = JSON.parse(user);
  //verifico nulo y vacio
  if (
    user.dni == null ||
    user.password == null ||
    user.dni == "" ||
    user.password == ""
  ) {
    res.json(null);
  }

  const Element = await prisma.persona.findFirstOrThrow({
    where: { dni: user.dni, Contrase_a: user.password },
  });

  let result = parser(Element);
  //si no existe el usuario
  if ((result = null)) {
    res.status(406).json({ message: "Usuario o contraseña incorrectos" });
  }

  const token = await jwt.sign({ _id: user.dni }, "keyregistro");
  res.status(200).json({ token });
});

//regisrarse
router.post("/Signup", async (req, res) => {
  const { dni, Contraseña, nombreCompleto, telefono, mail, direccion } =
    req.body;
  //verifico nulo y vacio
  if (
    dni == null ||
    Contraseña == null ||
    nombreCompleto == null ||
    telefono == null ||
    mail == null ||
    direccion == null ||
    dni == "" ||
    Contraseña == "" ||
    nombreCompleto == "" ||
    telefono == "" ||
    mail == "" ||
    direccion == ""
  ) {
    res.json(null);
  }

  const NuevoUsario = await prisma.persona.create({
    data: {
      dni: dni,
      Contrase_a: Contraseña,
      nombreCompleto: nombreCompleto,
      telefono: telefono,
      mail: mail,
      rol: Roles.usuario,
      direccion: direccion,
      estado: Estados.Permitido,
    },
  });

  const token = await jwt.sign({ _id: NuevoUsario.dni }, "keyregistro");
  res.status(200).json({ token });
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
