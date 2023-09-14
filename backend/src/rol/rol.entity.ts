import crypto from 'node:crypto'

export class Rol {
    constructor(
        public name: string,
        public description: string,
        public id = crypto.randomUUID()
    ) {}   
}