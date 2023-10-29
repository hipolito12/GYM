
const { ActividadDeDocente, ModificarActividadDeDocente } = require('../model/actividadDocenteModel.js')


const GetActividadDocente = async (req, res) => {

    try {
        const result = await ActividadDeDocente(req.userId);
        res.status(200).json([result])
    }
    catch (err) {
        console.log(err.message)
        res.status(500)
    }
}


const actulizarActividadDocente = async (req, res) => {
    try {
        const result = await ModificarActividadDeDocente(req.body);
        res.status(200).json(result)

    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })

    }
}
    module.exports = { GetActividadDocente, actulizarActividadDocente }