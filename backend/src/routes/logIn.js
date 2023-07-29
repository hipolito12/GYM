const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { parser } = require("../Functions.js");
const { Roles, Estados } = require("../Roles.js");
const jwt = require('jsonwebtoken');


const prisma = new PrismaClient();
const router = express.Router();

//ingresar
router.post("/logIn", async (req, res) => { 
  const { dni, password } = req.body;
  //verifico nulo y vacio 
  if (dni == null || password == null || dni=='' ||password=='') {res.json(null);}
  //
  const Element = await prisma.persona.findFirstOrThrow({
    where: { dni: dni, password: password },
  });

  let result = parser(Element);
  //si no existe el usuario
  if (result = null) 
  {
    res.status(406).json(null);
  }
  
  res.json(result);
});

//regisrarse
router.post("/SignIn", async (req, res) => {
  const { dni, Contraseña, nombreCompleto, telefono, mail, direccion } = req.body;
  //verifico nulo y vacio
  if (dni == null || Contraseña == null || nombreCompleto == null || telefono == null || mail == null || direccion == null || dni=='' || Contraseña=='' || nombreCompleto=='' || telefono=='' || mail=='' || direccion=='')
   {res.json(null);}
  
  const NuevoUsario = await prisma.persona.create({
    data: {
      dni: dni,
      password: Contraseña,
      nombreCompleto: nombreCompleto,
      telefono: telefono,
      mail: mail,
      rol: Roles.usuario,
      direccion: direccion,
      estado: Estados.Permitido,
    },
  });

  const token = await jwt.sign({_id: NuevoUsario.dni}, 'keyregistro');
  res.status(200).json({token});
});



async function VerificoToken(res,req,next)
{
  try {
		if (!req.headers.authorization) {
			return res.status(401).send('no autorizado');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}
module.exports = router;
