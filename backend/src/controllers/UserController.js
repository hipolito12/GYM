const {
  ObtenerPago,
  ActualizarDatosModel,
  ObtenerPersona,
  ObtenerActividades,
  ObtenerDetalleActividades,
  BuscaCupo,ActualizarCupoActividad
} = require("../model/UserModel.js");
const jwt = require("jsonwebtoken");
//const { check, body } = require("express-validator");

const ProximoPago = async (req, res) => {
  try {
    let respuesta = await ObtenerPago(req.userId);
    console.log(respuesta);
    return res.status(200).json({ respuesta });
    
  } catch (e) {
    console.log(e.message);
  }
};

const ActualizarDatos = async (req, res) => {
  try {
    let usuario = await ObtenerPersona(req.userId);

    // await validarCampos(req.body.datos, usuario);

    ActualizarDatosModel(req.userId, req.body.datos);

    return res.status(200).json({ message: "ActualizarDatos" });
  } catch (e) {
    return res
      .status(401)
      .json({ message: e.message + " error al actualizar datos" });
  }
};

const ListarActividades = async (req, res) => {
  try {
    let respuesta = await ObtenerActividades();
  

    return res.status(200).json(respuesta);
  } catch (e) {
    console.log(e.message);
    return res
      .status(401)
      .json({ message: e.message + " error al listar rutinas" });
  }
};

const DetalleActividad = async (req, res) => {
  try {
    let actividad = await ObtenerDetalleActividades(req.body.idActividad);

    return res.status(200).json(actividad);
  } catch (e) {
    console.log(e.message);
    return res
      .status(401)
      .json({ message: e.message + " error al Buscar actividades" });
  }
};

const ReservarCupo = async (req, res) => {
  try {
    let Cupo = await BuscaCupo(req.body.idActividad);
    if (Cupo === 0) {
      throw new Error("NO HAY CUPO");
    }
    await ActualizarCupoActividad(req.userId,Cupo.Cupo,req.body.idActividad);
    return res.status(200);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

async function VerificoToken(req, res, next) {
  try {
    console.log("aca");
    if (!req.headers.authorization) {
      return res.status(401).send("Unauhtorized Request");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
      return res.status(402).send("Unauhtorized Request");
    }

    const payload = await jwt.verify(token, "keyUsuario");

    if (!payload) {
      return res.status(403).send("Unauhtorized Request");
    }
    req.userId = payload._id;
    next();
  } catch (e) {
    console.log(e.message);
  }
}
/*async function validarCampos(datosActualizacion, datosExistentes) {
  console.log("aca")
  body('datosActualizacion.email',)
  .isEmail()
  .custom(async value => {

    if (value!==datosExistentes.email) {
      // Will use the below as the error message
      throw new Error('A user already exists with this e-mail address');
    }
  });

 /*  check("datosActualizacion.email")
    .isEmail()
    .normalizeEmail()
    .bail()
    .custom(async (value) => {
      if (value === datosExistentes.email) {
        throw new Error("El email ya está en uso.");
      }
    });

} */

module.exports = {
  ProximoPago,
  ActualizarDatos,
  ListarActividades,
  DetalleActividad,
  VerificoToken,
  ReservarCupo,
};
