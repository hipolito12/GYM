const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('tipo')
        .exists()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El tipo debe ser un número entero (clave que referencia al tipo de rutina)')
            } 
            return true
        }),
    check('nroAct')
        .isInt()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El nro de la actividad debe ser un número entero (clave que referencia a la actividad)')
            } 
            return true
        }),
    check('fechaAct')
        .custom(async value => {
            if(value !== null){
                throw new Error('Le fecha de actualización debe ser null al principio')
            } 
            return true
        }),
    check('imagen')
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('La imágen debe ser un string (enlace https)')
            } 
            return true
        }),
    check('descripcion')
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('La descripcion debe ser de tipo string')
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
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El tipo debe ser un número entero (clave que referencia al tipo de rutina)')
            } 
            return true
        }),
    check('nroAct')
        .isInt()
        .custom(async value => {
            if(typeof value !== 'number'){
                throw new Error('El nro de la actividad debe ser un número entero (clave que referencia a la actividad)')
            } 
            return true
        }),
    check('fechaAct')
    .exists()
        .custom(async value => {
            if(value !== null){
                throw new Error('Le fecha de actualización debe ser null (se asigna luego)')
            } 
            return true
        }),
    check('imagen')
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('La imágen debe ser un string (enlace https)')
            } 
            return true
        }),
    check('descripcion')
        .isString()
        .custom(async value => {
            if(typeof value !== 'string'){
                throw new Error('La descripcion debe ser de tipo string')
            } 
            return true
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate, validateUpdate }