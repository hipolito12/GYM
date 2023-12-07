const { getValor, UpdatePrecioCuota } = require("../model/CuotaModel.js");

const ActualizaPrecio = async (req, res) => {
  try {
    
  
      const update = await UpdatePrecioCuota(req.body.precio.valor);
      return res.status(200);
    
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

const ValorCuota = async (req, res) => {

    try {
        const precio = await getValor();
        return res.status(200).json( precio[0].valor );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
    }
}
module.exports = { ActualizaPrecio ,ValorCuota};