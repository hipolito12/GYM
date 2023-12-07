
const{GetAll, CreateTipoDeRutina , updateTiposDeRutina, deleteTiposDeRutina} = require('../model/tipoRutinaModel');
const getTipoRutina = async (req, res) => {
    try {
        const tiposRutina = await GetAll();
        return res.status(200).json(tiposRutina);
        
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }

    
}
const createTipoRutina = async (req, res) => {
    try {
        if (!req.body.nombre || !req.body.idTipoRutina) {
            return res.status(400).json({ message: "Please. Complete all required field" })
        }
        console.log(req.body)
        const tipoRutina = await CreateTipoDeRutina(req.body);
        return res.status(200).json(tipoRutina);
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const updateTipoRutina = async (req, res) => {

    try {
        if (!req.body.nombre || !req.body.idTipoRutina) {
            return res.status(400).json({ message: "Please. Complete all required field" })
        }
        const NewtipoRutina = await updateTiposDeRutina(req.body);
        return res.status(200).json(NewtipoRutina);
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}



const deleteTipoRutina = async (req, res) => {
    try {
        if ( !req.body.idTipoRutina) {
            return res.status(400).json({ message: "Please. Complete all required field" })
        }
        const UnoMenosEstaNoJodeMas = await deleteTiposDeRutina(req.body.idTipoRutina);
        return res.status(200).json(UnoMenosEstaNoJodeMas);
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}



module.exports = { getTipoRutina, createTipoRutina, updateTipoRutina, deleteTipoRutina }