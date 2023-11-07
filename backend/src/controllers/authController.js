
const { parser } = require("../Functions.js");
const { loginModel , SignupModel} = require('../model/authModel.js')
const jwt = require("jsonwebtoken");
const{Rols} = require('../Rols.js')

const LogInUser = async (req, res) => {
  let user = req.body;
  console.log("desdeControllrt"+user);
  //verifico nulo y vacio
  if (user.dni === null || user.contrasena === null) {
    return res.status(401).send("Unauhtorized Request");
  }

  try {
    console.log("desde el try"+user.dni);
    const Element = await loginModel(user.dni);

    let result = JSON.parse(parser(Element));
    //si no existe el usuario y si coinciden las contraseñas
    if (result ===null || result.password != user.contrasena) {
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
    password,
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
      password ===''| null  ||
      telefono === ''| null   ||
      email === ''| null      ||
      direccion ===''| null   ||
      nombre === ''| null     ||
      apellido === ''| null   ||
      sexo === ''|null
    ) {return res.status(401).send("Unauhtorized Requestt"); }
   

    const NuevoUsario = SignupModel(req.body);
  
    if (dni != null && dni != undefined) {
      const token = await jwt.sign({ _id: dni }, "keyUsuario");
      return res.status(200).json({ token: token, rol: Rols.usuario });
    }
    else {console.log("no se pudo registrar")}


  } catch (e) {
    console.log(` Error en signUp controller: ${e.message}`);
  }
};





module.exports = { LogInUser, Signup};
