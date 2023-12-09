const {GetAllEmpleados, AddEmpleado,UpdateEmpleado ,DeleteEmpleado,DeleteEmpleadoEnActividad,ObtenerTipos} = require("../model/GestionEmpleadosModel");

const GetAll= async (req, res) => {
    try{
        const empleados = await GetAllEmpleados();
        return res.status(200).json(empleados);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}

const NuevoEmpleado = async (req, res) => {
    try{
        
        const newEmpleado = await AddEmpleado(req.body);
        return res.status(200).json(newEmpleado);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}

const ModificarEmpleado = async (req, res) => {
    try{
        const updateEmpleado = await UpdateEmpleado(req.body);
        return res.status(200).json(updateEmpleado);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}

const BorrarEmpleado = async (req, res) => {
    try{
        const deleteEmpleado = await DeleteEmpleado(req.body.dni);
        return res.status(200).json(deleteEmpleado);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}

const BorrarEmpleadoEnActividad = async (req, res) => {
    try{        console.log(req.body.dni);

        const deleteEmpleadoEnActividad = await DeleteEmpleadoEnActividad(req.body.dni);
        return res.status(200).json(deleteEmpleadoEnActividad);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }

}

const ObtenerRoles = async (req, res) => {

    try{

        const tipos = await ObtenerTipos();
        return res.status(200).json(tipos);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error: error.message});
    }
}


module.exports = {GetAll, NuevoEmpleado, ModificarEmpleado, BorrarEmpleado,BorrarEmpleadoEnActividad,ObtenerRoles}