const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    check('cupo')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            if(value < 0 || value > 100){
                throw new Error('El cupo debe ser mayor o igual a cero y menor que 100')
            }
            return true
        })
    ,
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }