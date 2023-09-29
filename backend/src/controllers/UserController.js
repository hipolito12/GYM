const { ObtenerPago } = require("../model/UserModel.js");
const jwt = require("jsonwebtoken");
const ProximoPago = async (req, res) => {
  try {
    console.log( JSON.stringify (ObtenerPago(req.body)) );
    //return res.status(200).json({ pago: ObtenerPago(req.userId) });

  } catch (e) {
    console.log(e.message);
  }
};

const ActualizarDatos = async (req, res) => {};

const ListarRutinas = async (req, res) => {};

const ListarDetalleRutina = async (req, res) => {};




async function VerificoToken(req, res, next) {
  try {
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

module.exports = {
  ProximoPago,
  ActualizarDatos,
  ListarRutinas,
  ListarDetalleRutina,
  VerificoToken,
};
