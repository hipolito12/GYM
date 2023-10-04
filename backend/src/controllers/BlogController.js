const{ObtenerBlog,ObtenerTipoBlog} =require("../model/BlogModel")

const getBlogs = async (req, res) => 
{
    try
    {
        const blogs = await ObtenerBlog()
      return   res.status(200).json(blogs)
    }
    catch(error)
    {
        console.log("error en listado de blogs"+error)
        res.status(500).json({msg: error.message +"desde Controller "})
    }
}


const getTipoPost = async (req, res) => 
{
    try
    {
        const tipos = await ObtenerTipoBlog()
        return res.status(200).json(tipos)
    }
    catch(e)
    {
        console.log("error en listado de blogs"+e.message)
        res.status(500).json({msg: e.message +"desde Controller"})
    }

}




const createBlog = async (req, res) => {}
const DeleteBlog = async (req, res) => {}

const UpdateBlog = async (req, res) => {}

module.exports = {createBlog, getBlogs, DeleteBlog, UpdateBlog,getTipoPost}