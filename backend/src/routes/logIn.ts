import  express  from 'express'
import { Request, Response, NextFunction } from "express"
import { PrismaClient } from '@prisma/client'
const { parser_login } = require("../Functions.js");
const { Rols_login , States_login } = require("../Rols.js");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("root");
});

//ingresar
router.post("/login", async (req, res) => {
  let user = req.body;

  user = parser_login(user);
  user = JSON.parse(user);

  //verifico nulo y vacio
  if (user.dni === null || user.password === null) {
    return res.status(401).send("Unauhtorized Request");
  }

  try {
    
    const Element = await prisma.persona.findFirstOrThrow({
      where: { dni: user.dni },
    });
    let result = JSON.parse(parser_login(Element));

    //si no existe el usuario y si coinciden las contraseñas
    if (result == null || result.password != user.password) {
      return res.status(401).send("Unauhtorized Request");
    }

    const token = await jwt.sign({ _id: result.dni }, "keyregistro");
   
    return res.status(200).json({
      token: token,
      rol: result.IdRolfk,
    });
  } catch (e: Error | any) {
    console.log(e.message)
    }
  
});

interface SignupData {
    dni: number;
    password: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    sex: string;
    address: string;
  }

//regisrarse
router.post("/Signup", async (req, res) => {
  const {
    dni,
    password,
    name,
    surname,
    phone,
    email,
    sex,
    address,
  }: SignupData = req.body;

  //verifico nulo y vacio
  if (
    dni === null ||
    password === null ||
    phone === null ||
    email === null ||
    address === null
  ) {
    return res.status(401).send("Unauhtorized Request");
  }
  console.log(password);
  const NuevoUsario = await prisma.persona.create({
    data: {
      dni: dni,
      //password: password,                     //hay que corregir este error
      NombreCompleto: `${name}  ${surname}`,
      telefono: phone,
      email: email,
      sexo: sex,
      IdRolfk: Rols.usuario,
      Direccion: address,
      estado: States.Permitido,
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

interface CustomRequest extends Request {
  userId?: string; 
}


async function VerificoToken(req:CustomRequest, res:Response, next:NextFunction) {
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
