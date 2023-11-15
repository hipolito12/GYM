const { Informe } = require('../model/InformeModel');

const ObtnerDataInforme = async (req, res) => {
    try {
        ingresos= await Informe();
        return res.status(200).json( ingresos );
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = { ObtnerDataInforme };