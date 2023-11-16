const { getPersonasACargoActividad, CreatePersonaACargoActividad, UpdatePersonaACargoActividad
    , searchOnePersonaACargoActividadModel, DeletePersonaACargoActividad } = require ("../model/personaACargoActividadModel.js")

const getAll = async (req, res) => 
{
    try
    {
        const personasACargoActividad = await getPersonasACargoActividad()
      return   res.status(200).json(personasACargoActividad)
    }
    catch(error)
    {
        console.log("error en listado de personas a cargo de la actividad"+error)
        res.status(500).json({msg: error.message +"desde Controller "})
    }
}


const creates = async (req, res) => 
{
    try
    {  
        const personaACargoActividad = await CreatePersonaACargoActividad(req.body)
        return res.status(200).json(personaACargoActividad)
    }
    catch (e)
    {
        console.log("error la creación de la persona a cargo de la actividad"+e.message)
        res.status(500).json({msg: e.message +"desde Controller"})
    }
}


const deletes = async (req, res) => 
{
    try
    {  
        const dni = Number(req.params.id);
        const deletedPersonaACargo = await DeletePersonaACargoActividad(dni)
        return res.status(200).json(deletedPersonaACargo)

    }
    catch (e)
    {
      console.error(e);
      if (e.message === 'Persona a cargo no encontrada') {
        res.status(404).json({ error: 'Persona a cargo de la actividad no encontrada' });
      } else if (typeof dni !== 'number'  && typeof dni !== 'float') {                  //Falta validar bien
        res.status(403).json({ error: 'El dni de la persona debe ser un número'});
      } else {
        res.status(500).json({ error: 'Error al obtener la persona a cargo de la actividad por dni' });
      } 
    }
}



const test= async () => {console.log("hola")}


const updates = async (req, res) =>
 
{
    try
    {
        const updatedPersonaACargo = await UpdatePersonaACargoActividad(req.params.id, req.body)
        return res.status(200).json(updatedPersonaACargo)
    }
    catch (e)
    {
        console.error(e);
        if (e.message === 'Persona a cargo no encontrada') {
          res.status(404).json({ error: 'Persona a cargo de la actividad no encontrada' });
        } else if (typeof req.params.id !== 'float') {
          res.status(403).json({ error: 'El dni de la persona debe ser un número'});        //Falta validar bien
        } else {
          res.status(500).json({ error: 'Error al obtener la persona a cargo de la actividad por dni' });
    }
    }
}

const getById = async (req, res) => {
    try {
      const dni = Number(req.params.id);
      const personaACargo = await searchOnePersonaACargoActividadModel(dni);
      res.status(200).json(personaACargo);
    } catch (error) {
      console.error(error);
      if (error.message === 'Persona a cargo no encontrada') {
        res.status(404).json({ error: 'Persona a cargo de la actividad no encontrada' });
      } else if (typeof dni !== 'float') {
        res.status(403).json({ error: 'El dni de la persona debe ser un número'});
      } else {
        res.status(500).json({ error: 'Error al obtener la persona a cargo de la actividad por dni' });
      } 
    }
  };

module.exports = {getAll, creates,  deletes, updates, getById}