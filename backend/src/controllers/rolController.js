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
    let CreateRol = await CreateRol(req.body);
    return res.status(200).json(CreateRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const UpdateRols = async (req, res) => {
  try {
    let UpdateRol = await UpdateRol(req.body);
    return res.status(200).json(UpdateRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const DeleteRols = async (req, res) => {
  try {
    let DeleteRol = await DeleteRol(req.body);
    return res.status(200).json(DeleteRol);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { GetAllRols, CreateRols, UpdateRol, DeleteRols };
