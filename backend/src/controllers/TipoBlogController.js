const {
  tipoBlog,
  CreatetipoBlog,
  UpdatetipoBlog,
  deleteOneTipoBlog,
  deleteAllBlogs,
} = require("../model/TipoblogModel");

const TipoBlogController = async (req,res) => {
  try {
   let  tipoB = await tipoBlog();
    res.status(200).json( tipoB );
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const CreateTipoBlogController = async (req,res) => {
  try {
    const tipoBlog = await CreatetipoBlog(req.body.tipo);
    res.status(200).json({ tipoBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};


const UpdateTipoBlogController = async (req,res) => {
  try {
    console.log(req.body.id);
    const tipoBlog = await UpdatetipoBlog(req.body.id, req.body.tipo);
    res.status(200).json({ tipoBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

const DeleteOneTipoBlogController = async (req,res) => {

    try {
        const { id } = req.body;
        const tipoBlog = await deleteOneTipoBlog(id);
        return res.status(200).json([{ tipoBlog }]);
    } catch (error) {
        console.log(error.message);
       return  res.status(500).json({ msg: "Error en el servidor" });
    }
}

const DeleteAllBlogController = async (req,res) => {
    
        try {
            const { id } = req.body;
            const tipoBlog = await deleteAllBlogs(id);
            res.status(200).json({ tipoBlog });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Error en el servidor" });
        }
}


module.exports = { TipoBlogController, CreateTipoBlogController ,UpdateTipoBlogController,DeleteOneTipoBlogController,DeleteAllBlogController};
