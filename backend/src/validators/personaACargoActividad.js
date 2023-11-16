const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('DniPersonaAcargo')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El dni de la persona debe ser un número')
            } 
            return true
        }),
    check('IdActividadFk')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El id de la actividad debe ser un número entero')
            } 
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { validateCreate }