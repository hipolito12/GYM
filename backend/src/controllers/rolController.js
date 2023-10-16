const {
  AllRols,
  UpdateRol,
  DeleteRol,
  CreateRol,
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
    let updatedRol = await UpdateRol(req.body);
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

module.exports = { GetAllRols, CreateRols, UpdateRols, DeleteRols };
