import { Repository } from "../shared/repository.js";
import { Rol } from "./rol.entity.js";

const rols = [
    new Rol (
        'Cliente',
        'Person that uses the service',
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]

export class RolRepository implements Repository<Rol> {

    public findAll(): Rol[] | undefined {
        return rols
    }

    public findOne(item: { id: string; }): Rol | undefined {
        return rols.find((rol) => rol.id === item.id)
    }

    public add(item: Rol): Rol | undefined {
        rols.push(item)
        return item
    }

    public update(item: Rol): Rol | undefined {
        const characterIdx = rols.findIndex(character => character.id === item.id)

        if (characterIdx !== -1) {
          rols[characterIdx] = { ...rols[characterIdx], ...item }
        }
        return rols[characterIdx]
    }

    public delete(item: { id: string; }): Rol | undefined {
        const characterIdx = rols.findIndex((character) => character.id === item.id)

        if (characterIdx !== -1){
            const deletedCharacters = rols[characterIdx]
            rols.splice(characterIdx, 1)
            return deletedCharacters
        }
    }
}