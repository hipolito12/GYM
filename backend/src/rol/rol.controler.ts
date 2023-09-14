import { Request, Response, NextFunction } from "express"
import { RolRepository } from "./rol.repository.js"
import { Rol } from "./rol.entity.js"

const repository = new RolRepository

function sanitizeRolInput(req: Request, res: Response, next: NextFunction){
    req.body.sanitizedInput = {
        name: req.body.name,
        description: req.body.description
    }
    //more checks here

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key]
        }
    })
    next()
}

function findAll(req:Request, res:Response) {
    res.json({ data: repository.findAll() })
}

function findOne(req:Request, res:Response) {
    const id = req.params.id
    const rol = repository.findOne({id})
    if (!rol) {
        return res.status(404).send({ message: 'Character not found' })
    }
    res.json({ data: rol })
}

function add(req:Request, res:Response) {
    const input = req.body.sanitizedInput

    const rolInput = new Rol (
        input.name, 
        input.description 
    )
    
    const rol = repository.add(rolInput)
    return res.status(201).send({ message: 'Rol created', data: rol })
}

function update(req:Request, res:Response) {
    
    req.body.sanitizedInput.id = req.params.id
    const rol = repository.update(req.body.sanitizedInput) 

    if (!rol) {
        return res.status(404).send({ message: 'Rol not found' })
    }

    return res.status(200).send({ message:'Rol updates successfully', data: rol })
}


function remove(req:Request, res:Response) {
    const id = req.params.id
    const rol = repository.delete({id})
    

    if (!rol) {
        res.status(404).send( {message:'Rol not found'} )
    } else {
        res.status(200).send({ message: 'Rol deleted successfully' })
    }
   
}

export { sanitizeRolInput, findAll, findOne, add, update, remove }