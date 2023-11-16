const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const formatoHorario = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

function validarHorario(valor) {
  if (!formatoHorario.test(valor)) {
    throw new Error('Los horarios deben ser ingresadas en el formato 00:00');
  }
}

const validateCreate = [
    check('cup')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(value < 0 || value > 100){
                throw new Error('El cupo debe ser mayor o igual a cero y menor que 100')
            } else if (typeof value === "string") {
                throw new Error('El cupo debe ser un valor de tipo entero')
            } else if (value === null) {
                throw new Error('Debe ser ingresado un cupo')
            }
            return true
        }),
    check('nombre')
        .exists()
        .isString()
        .custom(async value => {
            if (typeof value !== 'string' && value !== null) {
                throw new Error('Debe ingresar un nombre para la actividad de tipo string')
            } else if (value === null) {
                throw new Error('Debe ingresar un nombre para la actividad')
            }
            return true
        }),
    check('turno')
        .exists()
        .isString()
        .custom(async value => {
            if (value.toLowerCase()!=="mañana" && value.toLowerCase()!=="tarde" && value.toLowerCase()!=="noche") {
                throw new Error('El turno solo puede ser de mañana, tarde o noche')
            } 
            return true
        }),
    check('horaI')
        .exists()
        .custom(async value => {
            if (validarHorario(value)) {
                throw new Error('Las horas deben ser ingresadas en el formato 00:00')
            }
        }),
    check('horaF')
        .exists()
        .custom(async value => {
            if (validarHorario(value)) {
                throw new Error('Las horas deben ser ingresadas en el formato 00:00')
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
    
]

const validateUpdate = [
    check('cup')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(value < 0 || value > 100){
                throw new Error('El cupo debe ser mayor o igual a cero y menor que 100')
            } else if (typeof value === "string") {
                throw new Error('El cupo debe ser un valor de tipo entero')
            } else if (value === null) {
                throw new Error('Debe ser ingresado un cupo')
            }
            return true
        }),
    check('nombre')
        .exists()
        .isString()
        .custom(async value => {
            if (typeof value !== 'string' && value !== null) {
                throw new Error('Debe ingresar un nombre para la actividad de tipo string')
            } else if (value === null) {
                throw new Error('Debe ingresar un nombre para la actividad')
            }
            return true
        }),
    check('turno')
        .exists()
        .isString()
        .custom(async value => {
            if (value.toLowerCase()!=="mañana" && value.toLowerCase()!=="tarde" && value.toLowerCase()!=="noche") {
                throw new Error('El turno solo puede ser de mañana, tarde o noche')
            } 
            return true
        }),
    check('horaI')
        .exists()
        .custom(async value => {
            if (validarHorario(value)) {
                throw new Error('Las horas deben ser ingresadas en el formato 00:00')
            }
        }),
    check('horaF')
        .exists()
        .custom(async value => {
            if (validarHorario(value)) {
                throw new Error('Las horas deben ser ingresadas en el formato 00:00')
            }
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
    
]



module.exports = { validateCreate, validateUpdate }