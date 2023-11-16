const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('tipo')
        .exists()
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('El nombre del nuevo tipo debe ser un string')
            } 
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateUpdate = [
    check('tipo')
        .exists()
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('El nombre del nuevo tipo debe ser un string')
            } 
            return true
        }),
    check('id')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El id del tipo de blog debe ser un entero')
            } 
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateDelete = [
    check('id')
        .exists()
        .isNumeric()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El id del tipo de blog debe ser un entero')
            } 
            return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate, validateUpdate, validateDelete }