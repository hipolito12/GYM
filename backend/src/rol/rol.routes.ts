import { Router } from "express";
import { sanitizeRolInput, findAll, findOne, add, update, remove } from "./rol.controler.js";

export const characterRouter = Router()

characterRouter.get('/', findAll)
characterRouter.get('/:id', findOne)
characterRouter.post('/', sanitizeRolInput, add)
characterRouter.put('/:id', sanitizeRolInput, update)
characterRouter.patch('/:id', sanitizeRolInput, remove)
characterRouter.delete('/:id', remove)