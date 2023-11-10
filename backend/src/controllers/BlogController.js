const{ObtenerBlog,ObtenerTipoBlog ,CrearBlog,ActualizarBlog,EliminarBlog} =require("../model/BlogModel")

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




const createBlog = async (req, res) => 
{
    try
    {  
        const blog = await CrearBlog(req.body,req.userId)
        return res.status(200).json(blog)
    }
    catch (e)
    {
        console.log("error en listado de blogs"+e.message)
        res.status(500).json({msg: e.message +"desde Controller"})
    }
}





const deletes = async (req, res) => 
{
    try
    {  
        console.log(req.body)
        const blog = await EliminarBlog(req.body.ide)
        return res.status(200).json(blog)

    }
    catch (e)
    {
        console.log("error en listado de blogs"+e.message)
        res.status(500).json({msg: e.message +"desde Controller"})
    }
}



const test= async () => {console.log("hola")}


const UpdateBlog = async (req, res) =>
 
{
    try
    {
        const blog = await ActualizarBlog(req.body)
        return res.status(200).json(blog)
    }
    catch (e)
    {
        console.log("error en listado de blogs"+e.message)
        res.status(500).json({msg: e.message +"desde Controller"})
    }
}

module.exports = {createBlog, getBlogs,  UpdateBlog,getTipoPost,deletes}