const {
  AllRols,
  UpdateRol,
  DeleteRol,
  CreateRol,
  GetOneRol,
} = require('../model/rolModel');

const GetAllRols = async (req, res) => {
  try {
    let allRols = await AllRols();
    return res.status(200).json(allRols);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const CreateRols = async (req, res) => {
  try {
    let createdRol = await CreateRol(req.body); // Cambio de nombre de variable
    return res.status(200).json(createdRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const UpdateRols = async (req, res) => {
  try {
    const id = req.params.id;
    let updatedRol = await UpdateRol(id, req.body);
    return res.status(200).json(updatedRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const DeleteRols = async (req, res) => {
  try {
    let deletedRol = await DeleteRol(req.body);
    return res.status(200).json(deletedRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getRolById = async (req, res) => {
  try {
    const id = req.params.id;
    let rol = await GetOneRol(id);
    if (rol) {
      return res.status(200).json(rol);
    } else {
      res.status(404).json({ error: 'Rol no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el rol por ID' });
  }
};

module.exports = { GetAllRols, CreateRols, UpdateRols, DeleteRols, getRolById };
