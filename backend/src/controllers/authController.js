
const { parser } = require("../Functions.js");
const { Roles, Estados } = require("../Roles.js");
const { loginModel , SignupModel} = require("../model/authModel.js");
const jwt = require("jsonwebtoken");

const LogInUser = async (req, res) => {
  let user = req.body;

  user = parser(user);
  user = JSON.parse(user);

  //verifico nulo y vacio
  if (user.dni === null || user.contrasena === null) {
    return res.status(401).send("Unauhtorized Request");
  }

  try {
    const Element = await loginModel(user.dni);

    let result = JSON.parse(parser(Element));
   
    //si no existe el usuario y si coinciden las contraseñas
    if (result == null || result.contrase_a != user.contrasena) {
      return res.status(401).send("Unauhtorized Requesttt");
    }

    const token = await jwt.sign({ _id: result.dni }, "keyUsuario");

    return res.status(200).json({
      token: token,
      rol: result.IdRolfk,
      nombre: result.NombreCompleto
    });
  } catch (e) {
    console.log(` Error en login controller: ${e.message}`);
  }
};



const Signup = async (req, res) => {
  const {
    dni,
    contrase_a,
    nombre,
    apellido,
    telefono,
    email,
    sexo,
    direccion,
  } = req.body;
  try {
    console.log(req.body);
    console.log(dni);
    //verifico nulo y vacio
    if (
      dni === ''| null        ||
      contrase_a ===''| null  ||
      telefono === ''| null   ||
      email === ''| null      ||
      direccion ===''| null   ||
      nombre === ''| null     ||
      apellido === ''| null   ||
      sexo === ''|null
    ) {return res.status(401).send("Unauhtorized Request"); }
   

    const NuevoUsario = SignupModel(req.body);
  
    if (dni != null && dni != undefined) {
      const token = await jwt.sign({ _id: dni }, "keyUsuario");
      return res.status(200).json({ token: token, rol: Roles.usuario });
    }
    else {console.log("no se pudo registrar")}


  } catch (e) {
    console.log(` Error en signUp controller: ${e.message}`);
  }
};




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
module.exports = { LogInUser, Signup, VerificoToken };
