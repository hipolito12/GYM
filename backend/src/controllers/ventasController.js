const { nuevaVenta } = require("../model/ventasModel");

const RegistrarVentas = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.userId);
    const venta = await nuevaVenta(req.userId, req.body); 
    res.status(200).json({ venta });
  } 
  catch (e) 
  {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};

module.exports = { RegistrarVentas };
