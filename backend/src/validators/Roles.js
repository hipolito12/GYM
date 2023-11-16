const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('nombre')
        .exists()
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('El nombre del rol debe ser un string')
            } 
            return true
        }),
    check('descripcion')
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('La descripción debe ser un string')
            } 
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { validateCreate }