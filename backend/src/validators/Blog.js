const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    
    (req, res, next) => {
        validateResult(req, res, next)
    }
    
]